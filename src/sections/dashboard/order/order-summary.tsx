import type { ChangeEvent, FC } from 'react';
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import type { Theme } from '@mui/material';
import {
  Button,
  Card,
  CardHeader,
  Divider,
  Stack,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import type { Order } from '../../../types/order';

const statusOptions: string[] = ['Canceled', 'Complete', 'Rejected'];

interface OrderSummaryProps {
  order: Order;
}

export const OrderSummary: FC<OrderSummaryProps> = (props) => {
  const { order, ...other } = props;
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const [status, setStatus] = useState<string>(statusOptions[0]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setStatus(event.target.value);
    },
    []
  );

  const align = mdUp ? 'horizontal' : 'vertical';
  const createdAt = format(order.createdAt, 'dd/MM/yyyy HH:mm');

  return (
    <Card {...other}>
      <CardHeader title="Basic info" />
      <Divider />
   
    </Card>
  );
};

OrderSummary.propTypes = {
  // @ts-ignore
  order: PropTypes.object.isRequired
};
