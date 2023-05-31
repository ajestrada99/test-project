import type { FC } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Link, Stack, SvgIcon, Typography } from '@mui/material';
import { CompanyJobs } from './company-jobs';
import type { Company } from '../../../types/job';
import { paths } from '../../../paths';

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard: FC<CompanyCardProps> = (props) => {
  const { company, ...other } = props;

  return (
    <Card {...other}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          spacing={2}
          direction={{
            xs: 'column',
            sm: 'row'
          }}
        >
          
         
        </Stack>
        <Box sx={{ mt: 2 }}>
          <CompanyJobs jobs={company.jobs} />
        </Box>
      </CardContent>
    </Card>
  );
};

CompanyCard.propTypes = {
  // @ts-ignore
  company: PropTypes.object.isRequired
};
