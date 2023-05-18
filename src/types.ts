export enum routesPath {
  WelcomePage = "/",
  SignInPage = "/sing-in",
  SignUpPage = "/sing-up",
  MainPage = "/main",
  NotFoundPage = "*",
}

export interface IRoutes {
  [key: string]: {
    id: number;
    name: string;
    path: routesPath;
    element: JSX.Element;
  };
}

export enum inputTypes {
  email = "email",
  password = "password",
}
