import { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMsal } from "@azure/msal-react";
import { Box, Container } from "@mui/material";
import { Layout } from "@/layouts/dashboard";
import { usePageView } from "@/hooks/use-page-view";
import { isEmpty } from "lodash";
import TitleComponent from "@/components/title";


const Approvals: NextPage = () => {

  const router = useRouter()
  const { accounts } = useMsal()
  const [token, setToken] = useState<any>(null);
  const [auth, setAuth] = useState<any>();
  usePageView();

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken ? getToken : undefined);
    const getAuth = localStorage.getItem("auth");
    setAuth(getAuth ? getAuth : undefined);
  }, []);

  
  
  return (
    <>
      <Head>
        <title>Dashboard: Overview</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          px: 1,
        }}
      >
        <Container maxWidth="xl">
          <TitleComponent title="Hola" subtitle="HOLA"/>
        </Container>
      </Box>
    </>
  );
};

Approvals.getLayout = (page) => <Layout>{page}</Layout>;

export default Approvals;
