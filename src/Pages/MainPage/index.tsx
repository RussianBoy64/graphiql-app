import { useTypeSelector } from "@src/redux/store";
import { Navigate } from "react-router-dom";
import { routes } from "@src/routes";

export const MainPage = () => {
  const { currentUser } = useTypeSelector((state) => state.login);
  const { welcome } = routes;

  return (
    <div>
      {!currentUser && <Navigate to={welcome.path} />}
      MainPage
    </div>
  );
};
