import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import {
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Link,
  Stack,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { BreadcrumbsSeparator } from '../oldVersion/breadcrumbs-separator';

const LayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column'
  })
);

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});

interface LayoutProps {
  breadcrumbs?: {
    title: string;
    href?: string;
  }[];
  children: ReactNode;
  title: string;
}

export const Layout: FC<LayoutProps> = (props) => {
  const { breadcrumbs, children, title } = props;

  return (
    <LayoutRoot>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.mode === 'dark'
            ? 'neutral.800'
            : 'neutral.50',
          py: '120px'
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            {!breadcrumbs && (
              <div>
              </div>
            )}
            <div>
              <Typography variant="h1">
                {title}
              </Typography>
            </div>
            {breadcrumbs && (
              <div>
                <Breadcrumbs separator={<BreadcrumbsSeparator />}>
                  {breadcrumbs.map((item, index) => {
                    const isLast = breadcrumbs.length - 1 === index;

                    if (isLast) {
                      return (
                        <Typography
                          color="text.secondary"
                          key={index}
                          variant="subtitle2"
                        >
                          {item.title}
                        </Typography>
                      );
                    }

                    return (
                      <Link
                        color="text.primary"
                        component={NextLink}
                        href={item.href}
                        key={index}
                        variant="subtitle2"
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </Breadcrumbs>
              </div>
            )}
          </Stack>
        </Container>
      </Box>
      <Divider />
      <LayoutContainer>
        {children}
      </LayoutContainer>
    </LayoutRoot>
  );
};

Layout.propTypes = {
  breadcrumbs: PropTypes.array,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};
