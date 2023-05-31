/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Box,Container, Paper } from "@mui/material";
import { usePageView } from "@/hooks/use-page-view";
import { Layout } from "@/layouts/dashboard";
import TitleComponent from "@/components/title";
import DataGridComponent from "@/components/datagridSe";
import { useLazySettlementsQuery } from "@/logic/settlements";
import ModalComponent from '@/components/modal';
import { useLazyNewRegisterQuery } from '@/logic/settlements';
import Router from "next/router";
import { toast, ToastContainer } from 'react-toastify';

const Settlements: NextPage = () => {
  usePageView();
  
  const [ newRegister, setNewRegister ] = useState<any>();
  const [triggerSettlement, { data, isLoading, isError }] = useLazySettlementsQuery();
  
  const { query } = useRouter();
  const values: string[] = (query?.index as string).split("-");
  const worker:number = values && parseInt(values[0]);
  const companies:string = values && values[1];

  useEffect(() => {
    if (companies && worker) {
      triggerSettlement({ companies, worker });
    }
  }, [companies, worker, triggerSettlement]);

  const [ createNewRegister, {
    data: register,
    isLoading: loadingRegister,
    isError: errorRegister , 
  }] = useLazyNewRegisterQuery(); 

  useEffect(()=> {
    if(newRegister) createNewRegister(newRegister); 
  },[newRegister, createNewRegister]); 

  useEffect(()=> { 
    if(register && !errorRegister){ 
      setTimeout(()=> {
        Router.push(`/dashboard/lines/${worker}*${companies}*${register?.ExpenseSettlementId}`)
      },1000)
    }
    if(errorRegister){ 
      toast.error('Ha ocurrido un error!', {
        position: "top-right",
        autoClose: 200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  },[register, isError])

  useEffect(()=> { 
    if (companies && worker) {
      triggerSettlement({ companies, worker });
    }
  }, [newRegister, companies, worker])

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
          <TitleComponent
            title="Liquidaciones viáticos/caja chica"
            subtitle="/settlements"
          />

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 8,
            }}
          >
            <Paper 
              elevation={1}
              style={{padding:'10px'}}
            > 
            <ModalComponent 
              company={companies}
              worker={worker}
              setNewRegister={setNewRegister}
            /> 
        <DataGridComponent
              data={data?.value}
              isError={isError}
              isLoading={isLoading}
            />
            </Paper>
          </Box>
        </Container>
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Box>
    </>
  );
};

Settlements.getLayout = (page) => <Layout>{page}</Layout>;

export default Settlements;
