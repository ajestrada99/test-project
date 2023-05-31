import type { FC } from 'react';
import { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { SxProps } from '@mui/system';
import { Box, Stack, Typography } from '@mui/material';
import { TenantPopover } from './tenant-popover';

const tenants: string[] = ['Devias', 'Acme Corp'];

interface TenantSwitchProps {
  sx?: SxProps;
}

export const TenantSwitch: FC<TenantSwitchProps> = (props) => {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const [openPopover, setOpenPopover] = useState<boolean>(false);

  const handlePopoverOpen = useCallback(
    () => {
      setOpenPopover(true);
    },
    []
  );

  const handlePopoverClose = useCallback(
    () => {
      setOpenPopover(false);
    },
    []
  );

  const handleTenantChange = useCallback(
    (tenant: string) => {
      setOpenPopover(false);
    },
    []
  );

  return (
    <>
      <Stack
        alignItems="center"
        direction="row"
        spacing={2}
        {...props}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            color="inherit"
            variant="h6"
          >
            Foragro
          </Typography>
          <Typography
            color="neutral.400"
            variant="body2"
          >
            version 1.1.5
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

TenantSwitch.propTypes = {
  // @ts-ignore
  sx: PropTypes.object
};
