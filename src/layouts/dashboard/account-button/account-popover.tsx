import type { FC } from 'react';
import { useCallback } from 'react';
import Router from 'next/router';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import {
  Box,
  Button,
  Divider,
  Popover,
  Typography
} from '@mui/material';
import { useAuth } from '@/hooks/use-auth';
import { paths } from '@/paths';
import { Issuer } from '@/utils/auth';
import { useMsal } from "@azure/msal-react";

interface AccountPopoverProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
}

export const AccountPopover: FC<AccountPopoverProps> = (props) => {
  const { anchorEl, onClose, open, ...other } = props;
  const router = useRouter();
  const auth = useAuth();
  const { accounts , instance} = useMsal();
  const handleLogout = useCallback(
    async (): Promise<void> => {
      try {
        onClose?.();

        switch (auth.issuer) {
          case Issuer.Amplify: {
            await auth.signOut();
            break;
          }

          case Issuer.Auth0: {
            await auth.logout();
            break;
          }

          case Issuer.Firebase: {
            await auth.signOut();
            break;
          }

          case Issuer.JWT: {
            await auth.signOut();
            break;
          }

          default: {
            console.warn('Using an unknown Auth Issuer, did not log out');
          }
        }

        router.push(paths.index);
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
      }
    },
    [auth, router, onClose]
  );

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom'
      }}
      disableScrollLock
      onClose={onClose}
      open={!!open}
      PaperProps={{ sx: { width: 200 } }}
      {...other}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="body1">
       { accounts && accounts[0]?.name?.split(' ')[0]} { ' ' }
       { accounts && accounts[0]?.name?.split(' ')[2]}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          { accounts && accounts[0]?.username}
        </Typography>
      </Box>
      <Divider />
      <Divider sx={{ my: '0 !important' }} />
      <Box
        sx={{
          display: 'flex',
          p: 1,
          justifyContent: 'center'
        }}
      >
        <Button
          color="inherit"
          onClick={()=> {
            handleLogout(), 
            instance.logoutPopup().then(()=> {
              localStorage.removeItem('token');
              localStorage.removeItem('auth');
              localStorage.clear();
              Router.push('/')
            })
          }}
          size="small"
        >
         Cerrar sesión
        </Button>
      </Box>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool
};
