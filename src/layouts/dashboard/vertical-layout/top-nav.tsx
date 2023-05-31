import type { FC } from 'react';
import PropTypes from 'prop-types';
import Menu01Icon from '@untitled-ui/icons-react/build/esm/Menu01';
import type { Theme } from '@mui/material';
import { Box, IconButton, Stack, SvgIcon, useMediaQuery } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { AccountButton } from '../account-button';
import { ContactsButton } from '../contacts-button';
import { LanguageSwitch } from '../language-switch';
import { NotificationsButton } from '../notifications-button';
import { SearchButton } from '../search-button';

const TOP_NAV_HEIGHT: number = 64;
const SIDE_NAV_WIDTH: number = 20;

interface TopNavProps {
  onMobileNavOpen?: () => void;
}

export const TopNav: FC<TopNavProps> = (props) => {
  const { onMobileNavOpen, ...other } = props;
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  /// diseño del drawer
  return (
    <Box
      component="header"
      sx={{
        backdropFilter: 'blur(6px)',
        backgroundColor:'rgb(235 254 231 / 80%)',
        position: 'sticky',
        left: {
          lg: `${SIDE_NAV_WIDTH}px`
        },
        top: 0,
        width: {
          lg: `calc(100% - 0px)`
        },
        zIndex: (theme) => theme.zIndex.appBar
      }}
      {...other}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 2
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
        >
            <IconButton onClick={onMobileNavOpen}>
              <SvgIcon>
                <Menu01Icon />
              </SvgIcon>
            </IconButton>
          {/* <SearchButton /> */}
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
        >
          {/* <LanguageSwitch />
          <NotificationsButton />
          <ContactsButton /> */}
          <AccountButton />
        </Stack>
      </Stack>
    </Box>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func
};
