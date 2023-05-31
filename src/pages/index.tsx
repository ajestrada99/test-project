import type { NextPage } from "next";
import Head from "next/head";
import { usePageView } from "@/hooks/use-page-view";
import { Layout as AuthLayout } from "@/layouts/auth/classic-layout";

const Page: NextPage = () => {
  usePageView();
  return (
    <>
      <Head>
        <title>Foragro platform</title>
      </Head>
    </>
  );
};

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;