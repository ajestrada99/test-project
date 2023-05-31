import { NextPage } from "next";
import Head from "next/head";
import { usePageView } from "@/hooks/use-page-view";
import { Layout } from "@/layouts/dashboard";
import { Box, Container, Paper } from "@mui/material";
import TitleComponent from "@/components/title";
import DataGridLines from '@/components/datagridLines';
import { useLazyGetLinesQuery } from "@/logic/lines"
import { useEffect } from "react";
import { useRouter } from "next/router";

const LinesPages: NextPage = () => {
  const { query } = useRouter();
  usePageView();

  const [ triggerLines, { data, isError, isLoading}] = useLazyGetLinesQuery();
  const splitValues:string[] = (query?.index as string).split('*');
  const worker = splitValues && parseInt(splitValues[0]);
  const company =splitValues && splitValues[1];
  const expenseSettlementId = splitValues &&splitValues[2]
  

  useEffect(()=> {
    console.log(company, expenseSettlementId)
    triggerLines({company, expenseSettlementId})
  },[company, expenseSettlementId, triggerLines])

  console.log(data)

  return (
    <>
      <Head>
        <title>Dashboard: Linea</title>
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
            <Paper elevation={1} style={{ padding: "10px" }}>
                <DataGridLines 
                    data={data?.values}
                    isError={isError}
                    isLoading={isLoading}
                />
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
};

LinesPages.getLayout = (page) => <Layout>{page}</Layout>;

export default LinesPages;
