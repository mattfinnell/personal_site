import { FC } from "react";

export type RouteType = {
  label: string;
  subLabel?: string;
  children?: Array<RouteType>;
  path: string;
  component: FC<any>;
};

export const routes: Array<RouteType> = [];
