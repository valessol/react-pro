import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { routes } from "../router/routes";

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="lazy1">Lazy 1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy 2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy 3</NavLink>
        </li>
      </ul>

      <Routes>
        {routes.map(({ path, Component }) => {
          return <Route path={path} element={<Component />} />;
        })}
        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </>
  );
};

export default Navigation;
