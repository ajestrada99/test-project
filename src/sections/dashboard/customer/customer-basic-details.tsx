import type { FC } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardActions, CardHeader } from '@mui/material';

interface CustomerBasicDetailsProps {
  address1?: string;
  address2?: string;
  country?: string;
  email: string;
  isVerified: boolean;
  phone?: string;
  state?: string;
}

export const CustomerBasicDetails: FC<CustomerBasicDetailsProps> = (props) => {
  const { address1, address2, country, email, isVerified, phone, state, ...other } = props;

  return (
    <Card {...other}>
      <CardHeader title="Basic Details" />
      
      <CardActions>
        <Button
          color="inherit"
          size="small"
        >
          Reset Password
        </Button>
      </CardActions>
    </Card>
  );
};

CustomerBasicDetails.propTypes = {
  address1: PropTypes.string,
  address2: PropTypes.string,
  country: PropTypes.string,
  email: PropTypes.string.isRequired,
  isVerified: PropTypes.bool.isRequired,
  phone: PropTypes.string,
  state: PropTypes.string
};
