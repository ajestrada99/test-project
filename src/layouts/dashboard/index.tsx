/* eslint-disable react-hooks/exhaustive-deps */
import { FC, ReactNode, useEffect, useMemo, useContext } from "react";
import PropTypes from "prop-types";
import { useMsal } from "@azure/msal-react";
import { useTranslation } from "react-i18next";
import { VerticalLayout } from "./vertical-layout";
import { getSections } from "./config";
import type { Section } from "./config";
import { HorizontalLayout } from "./horizontal-layout";
import { useSettings } from "@/hooks/use-settings";
import { withAuthGuard } from "@/hocs/with-auth-guard";
import { useLazyGetCompaniesQuery } from "@/logic/companies";
import { SvgIcon } from "@mui/material";
import HomeSmileIcon from "@/icons/untitled-ui/duocolor/home-smile";
import { useUserContext, UsersPageContext } from "@/contexts/user-context";

export interface Companies {
  "@odata.context": string;
  value: Value[];
}

export interface Value {
  "@odata.etag": string;
  dataAreaId: string;
  name: string;
  company: string;
  Worker: number;
  set: string;
}

const useTranslatedSections = ({ data }: any): Section[] => {
  const { t } = useTranslation();

  const val: any[] = data?.value?.map((el: Value) => {
    return {
      items: [
        {
          title: el.company,
          icon: (
            <SvgIcon fontSize="small">
              <HomeSmileIcon />
            </SvgIcon>
          ),
          items: [
            {
              title: "Contabilidad",
              items: [
                {
                  title: "Liquidación de viaticos/caja",
                  path: `/dashboard/settlements/${el.Worker}-${el.company}`,
                },
                {
                  title: "Aprobaciones",
                  path: `/dashboard/approvals/${el.Worker}-${el.company}`,
                },
              ],
            },
          ],
        },
      ],
    };
  });

  return useMemo(() => getSections(t, val), [t, val]);
};
interface LayoutProps {
  children?: ReactNode;
}

interface ErrorMessage {
  status: number;
  data: Data;
}

interface Data {
  message: string;
}

export const Layout: FC<LayoutProps> = withAuthGuard((props) => {
  const { accounts } = useMsal();
  const [triggerCompanies, { data, isLoading, isError }] =
    useLazyGetCompaniesQuery();

  const splitName = accounts[0]?.username.split("@")[0];
  let userName = splitName?.replace(/#/g, "%23");

  useEffect(() => {
    if (userName) triggerCompanies({ userName });
  }, [userName]);

  const settings = useSettings();
  const sections = useTranslatedSections({ data });

  if (settings.layout === "horizontal") {
    return (
      <HorizontalLayout
        sections={sections}
        navColor={settings.navColor}
        {...props}
      />
    );
  }

  if (isLoading) {
    return <></>;
  }

  if (isError) {
    return <>Ha ocurrido un error!!</>;
  }

  return (
    <VerticalLayout
      sections={sections}
      navColor={settings.navColor}
      {...props}
    />
  );
});

Layout.propTypes = {
  children: PropTypes.node,
};
