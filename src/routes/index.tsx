import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import {
  MainPage,
  NotFoundPage,
  SignInPage,
  SignUpPage,
  WelcomePage,
} from "../Pages";
import { IRoutes, routesPath } from "../types";

export const router = createBrowserRouter([
  {
    path: routesPath.WelcomePage,
    element: <App />,
    children: [
      { path: routesPath.WelcomePage, element: <WelcomePage /> },
      { path: routesPath.SignInPage, element: <SignInPage /> },
      { path: routesPath.SignUpPage, element: <SignUpPage /> },
      { path: routesPath.MainPage, element: <MainPage /> },
      { path: routesPath.NotFoundPage, element: <NotFoundPage /> },
    ],
  },
]);

export const routes: IRoutes = {
  welcome: {
    id: 1,
    name: "Main page",
    path: routesPath.WelcomePage,
    element: <WelcomePage />,
  },
  signIn: {
    id: 2,
    name: "Sign In",
    path: routesPath.SignInPage,
    element: <SignInPage />,
  },
  signUp: {
    id: 3,
    name: "Sign Up",
    path: routesPath.SignUpPage,
    element: <SignUpPage />,
  },
  main: {
    id: 4,
    name: "Main page",
    path: routesPath.MainPage,
    element: <MainPage />,
  },
  notFound: {
    id: 5,
    name: "Main page",
    path: routesPath.NotFoundPage,
    element: <NotFoundPage />,
  },
};
