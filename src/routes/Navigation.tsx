import {
  BrowserRouter,
  Routes,
  Route,
  NavLink, Navigate,
} from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            { routes.map(({to, name}) =>
              <li>
                <NavLink to={to} className={({isActive}) => isActive ? "nav-active": ""} >{name}</NavLink>
              </li>
            )}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          { routes.map(({path, Component}) => <Route path={path} element={<Component />}/>)}
          <Route path="/*" element={<Navigate to={routes[0].to} replace />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}