import type { FC } from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Card,
  CardHeader,
  IconButton,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material';
import { Scrollbar } from '../../../components/scrollbar';
import { SeverityPill } from '../../../components/severity-pill';
import { paths } from '../../../paths';
import type { CustomerInvoice } from '../../../types/customer';

interface CustomerInvoicesProps {
  invoices?: CustomerInvoice[];
}

export const CustomerInvoices: FC<CustomerInvoicesProps> = (props) => {
  const { invoices = [], ...other } = props;

  return (
    <Card {...other}>
     
      <Scrollbar>
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                Date
              </TableCell>
              <TableCell>
                Total
              </TableCell>
              <TableCell>
                Status
              </TableCell>
              <TableCell align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => {
              const issueDate = format(invoice.issueDate, 'MMM dd,yyyy');
              const statusColor = invoice.status === 'paid' ? 'success' : 'error';

              return (
                <TableRow key={invoice.id}>
                  <TableCell>
                    #
                    {invoice.id}
                  </TableCell>
                  <TableCell>
                    {issueDate}
                  </TableCell>
                  <TableCell>
                    {invoice.amount}
                  </TableCell>
                  <TableCell>
                    <SeverityPill color={statusColor}>
                      {invoice.status}
                    </SeverityPill>
                  </TableCell>
                  <TableCell align="right">
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        component="div"
        count={invoices.length}
        onPageChange={(): void => {}}
        onRowsPerPageChange={(): void => {}}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomerInvoices.propTypes = {
  invoices: PropTypes.array
};
