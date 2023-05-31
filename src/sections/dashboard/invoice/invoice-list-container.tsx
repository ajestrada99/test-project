import { styled } from '@mui/material/styles';

export const InvoiceListContainer = styled(
  'div',
  { shouldForwardProp: (prop) => prop !== 'open' }
)<{ open?: boolean; }>(
  ({ theme, open }) => ({
    flexGrow: 1,
    overflow: 'auto',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(8),
    display:'inline-grid',
    paddingBottom: theme.spacing(8),
    zIndex: 1,
    [theme.breakpoints.up('xs')]: {
      marginLeft: -320
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: -450
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
      [theme.breakpoints.up('lg')]: {
        marginLeft: 0
      },
      [theme.breakpoints.up('xs')]: {
        marginLeft: 0
      },
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    })
  })
);
