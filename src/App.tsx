import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/home';
import { Username } from './pages/username';
import { Preview } from "./pages/preview";
import { Admin } from "./pages/admin";
import { Login } from "./pages/login";
import { Networks } from "./pages/networks";
import { ErrorPage } from './pages/error';

import { Private } from "./routes/Private";

const router = createBrowserRouter([
  {
    path: "/:username",
    element: <Username />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/admin",
    element: <Private> <Admin /> </Private>
  },
  {
    path: "/admin/social",
    element: <Private> <Networks /> </Private>
  },
  {
    path: "/admin/preview",
    element: <Private> <Preview /> </Private>
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);

export { router };