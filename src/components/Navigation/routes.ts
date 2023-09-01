import { FC } from "react";
import Confetti from "../Confetti/Confetti";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";

export type RouteType = {
  label: string;
  subLabel?: string;
  children?: Array<RouteType>;
  path: string;
  component: FC<any>;
  authRequired?: boolean;
};

export const routes: Array<RouteType> = [
  {
    label: "Home",
    path: "/",
    component: Home,
  },
  {
    label: "Profile",
    path: "/profile",
    component: Profile,
    authRequired: true,
  },
  {
    label: "Confetti",
    path: "/confetti",
    component: Confetti,
    authRequired: true,
  },
].map((route) => ({ ...route, hidden: route.authRequired === true }));
