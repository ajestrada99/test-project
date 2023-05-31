/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { useMsal, useAccount } from "@azure/msal-react";
import { useSearchParams } from "next/navigation";
import { isEmpty } from "lodash";
import LogoForAgro from '../../public/assets/foragrologo.png'; 
import Router from 'next/router'

const useParams = (): { returnTo?: string } => {
  const searchParams = useSearchParams();
  const returnTo = searchParams.get("returnTo") || undefined;
  return {
    returnTo,
  };
};

const loginRequest = {
  scopes: ["User.Read"],
};

const SignIn = () => {

  const { returnTo } = useParams();
  const { instance, accounts } = useMsal();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    instance?.loginRedirect(loginRequest);
    await instance.handleRedirectPromise();
  };

  const account: any = useAccount(accounts[0]);
  async function getindata() {
      if (!isEmpty(account)) {
      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account,
      });
      if (response) {
        Router.push({
          pathname: returnTo || '/validators',
        });
      }
    }
  };

  useEffect(() => {
    getindata();
  }, [accounts]);

  return (
    <>
      <Card elevation={16}>
        <CardHeader
          subheader={
            <Typography
              color="text.secondary"
              variant="body2"
              style={{ textAlign: "center", fontWeight: "bold" }}
            >
              {"Autenticación con Microsoft".toUpperCase()}
            </Typography>
          }
          sx={{ pb: 0 }}
        />
        <CardContent>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
           <Image
              src={LogoForAgro}
              alt="ForAgro"
              width="100"
              height="100"
            /> 
          </Stack>
          <Button
            fullWidth
            size="large"
            sx={{ mt: 2 }}
            type="submit"
            variant="contained"
            onClick={handleLogin}
          >
            INGRESAR
          </Button>
        </CardContent>
      </Card>
      <Stack 
        spacing={3}
        sx={{ mt: 3 }}
      >
        <Alert 
          severity="info"
          style={{ justifyContent: "center" }}
        >
          <div>Tu información está siendo resguardada por Microsoft</div>
        </Alert>
      </Stack>
    </>
  );
};

export default SignIn;
