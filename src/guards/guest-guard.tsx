import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { paths } from '@/paths';

interface GuestGuardProps {
  children: ReactNode;
}

export const GuestGuard: FC<GuestGuardProps> = (props) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const { children } = props;
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const check = useCallback(() => {
    if (!isEmpty(token)) {
      router.replace(paths.dashboard.index);
    } else {
      setChecked(true);
    }
  }, [token, router]);

  // Only check on mount, this allows us to redirect the user manually when auth state changes
  useEffect(
    () => {
      check();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (!checked) {
    return null;
  }
  return <>{children}</>;
};

GuestGuard.propTypes = {
  children: PropTypes.node
};
