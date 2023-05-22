import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@routes/index";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./main.module.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
