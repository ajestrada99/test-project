import type { FC } from 'react';
import type { Theme } from '@mui/material';
import { Button, Card, CardActions, CardHeader, Divider, useMediaQuery } from '@mui/material';


export const CustomerPayment: FC = (props) => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const align = mdUp ? 'horizontal' : 'vertical';

  return (
    <Card {...props}>
      <CardHeader title="Payment" />
     
      <Divider />
      <CardActions sx={{ flexWrap: 'wrap' }}>
        <Button
          size="small"
          variant="outlined"
        >
          Create Invoice
        </Button>
        <Button size="small">
          Resend Due Invoices
        </Button>
      </CardActions>
    </Card>
  );
};
