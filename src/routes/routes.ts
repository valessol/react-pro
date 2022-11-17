import { LazyPage1, LazyPage2, LazyPage3 } from "../lazy-load/pages";

interface Route {
  path: string;
  Component: () => JSX.Element;
  name: string;
}

export const routes: Route[] = [
  {
    path: "/lazy1",
    Component: LazyPage1,
    name: "LazyPage-1",
  },
  {
    path: "/lazy2",
    Component: LazyPage2,
    name: "LazyPage-2",
  },
  {
    path: "/lazy3",
    Component: LazyPage3,
    name: "LazyPage-3",
  },
];
