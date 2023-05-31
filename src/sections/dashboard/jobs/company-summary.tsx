import type { FC } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import type { Company } from '../../../types/job';
import { getInitials } from '../../../utils/get-initials';

interface CompanySummaryProps {
  company: Company;
}

export const CompanySummary: FC<CompanySummaryProps> = (props) => {
  const { company, ...other } = props;

  return (
    <Card {...other}>
      <CardContent>
        <Typography
          color="text.secondary"
          component="p"
          sx={{ mb: 2 }}
          variant="overline"
        >
          About
        </Typography>
     
        <Divider sx={{ my: 2 }} />
        <Typography
          color="text.secondary"
          component="p"
          sx={{ mb: 2 }}
          variant="overline"
        >
          Founders
        </Typography>
        <Stack spacing={2}>
          {(company.founders || []).map((founder) => (
            <Stack
              alignItems="center"
              direction="row"
              key={founder.id}
              spacing={2}
            >
              <Avatar src={founder.avatar}>
                {getInitials(founder.name)}
              </Avatar>
              <div>
                <Typography variant="subtitle2">
                  {founder.name}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  {founder.role}
                </Typography>
              </div>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

CompanySummary.propTypes = {
  // @ts-ignore
  company: PropTypes.object.isRequired
};
