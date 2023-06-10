import "@/styles/global.css";

import { Suspense } from "react";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { history } from "@/utils";
import { Provider } from "react-redux";
import { store } from "@/store";
import { ConfigProvider } from "antd";
import { theme } from "@/styles/theme";
import { Loader } from "@/UI";
import { ModalProvider } from "../context";
import { Router } from "@/router";

export const App = () => {
  return (
    <GoogleOAuthProvider clientId="966040164858-d01oql7ungul6fcpoc3e0ft0vqalnuhc.apps.googleusercontent.com">
      <HistoryRouter history={history}>
        <Provider store={store}>
          <ConfigProvider theme={theme}>
            <Suspense fallback={<Loader />}>
              <ModalProvider>
                <Router />
              </ModalProvider>
            </Suspense>
          </ConfigProvider>
        </Provider>
      </HistoryRouter>
    </GoogleOAuthProvider>
  );
};
