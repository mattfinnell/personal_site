import { FC } from "react";
import Confetti from "../Confetti/Confetti";
import Home from "../Home/Home";

export type RouteType = {
  label: string;
  subLabel?: string;
  children?: Array<RouteType>;
  path: string;
  component: FC<any>;
};

export const routes: Array<RouteType> = [
  {
    label: "Home",
    path: "/",
    component: Home,
  },
  {
    label: "Confetti",
    path: "/confetti",
    component: Confetti,
  },
];
