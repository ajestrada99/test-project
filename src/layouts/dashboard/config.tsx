import type { ReactNode } from "react";
import type { TFunction } from "react-i18next";
import { SvgIcon } from "@mui/material";
import File from "@/icons/untitled-ui/duocolor/file-04";
import BarChartSquare02Icon from "@/icons/untitled-ui/duocolor/bar-chart-square-02";
import CheckDone01Icon from "@/icons/untitled-ui/duocolor/check-done-01";
import File01Icon from "@/icons/untitled-ui/duocolor/file-01";
import HomeSmileIcon from "@/icons/untitled-ui/duocolor/home-smile";
import LayoutAlt02Icon from "@/icons/untitled-ui/duocolor/layout-alt-02";
import LineChartUp04Icon from "@/icons/untitled-ui/duocolor/line-chart-up-04";
import Users03Icon from "@/icons/untitled-ui/duocolor/users-03";
import { tokens } from "@/locales/tokens";
import { paths } from "@/paths";

/// Estas son las rutas

interface Item {
  disabled?: boolean;
  icon?: ReactNode;
  items?: Item[];
  label?: ReactNode;
  path?: string;
  title: string;
  role?: string;
}

export interface Section {
  items: Item[];
  subheader?: string;
}

export const getSections = (t: TFunction, val:any[]): Section[] => { 
  return val && val || [{ items: [ {title:''}]}]
};