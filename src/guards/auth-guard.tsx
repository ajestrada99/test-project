import type { FC, ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useAuth } from '../hooks/use-auth';
import { paths } from '../paths';
import { Issuer } from '../utils/auth';

// const loginPaths: Record<Issuer, string> = {
//   // [Issuer.Amplify]: paths.auth.amplify.login,
//   // [Issuer.Auth0]: paths.auth.auth0.login,
//   // [Issuer.Firebase]: paths.auth.firebase.login,
//   // [Issuer.JWT]: paths.auth.jwt.login,
//   [Issuer.Microst]: ''
// };

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard: FC<AuthGuardProps> = (props) => {
  const { children } = props;
  const router = useRouter();
  const { isAuthenticated, issuer } = useAuth();
  const [checked, setChecked] = useState(false);
  

  // If got here, it means that the redirect did not occur, and that tells us that the user is
  // authenticated / authorized.

  return <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};
