import { LazyExoticComponent } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: LazyPage1,
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: LazyPage2,
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: LazyPage3,
  },
];
