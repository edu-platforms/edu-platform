import "@/styles/global.css";

import React, { Suspense } from "react";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { history } from "@/libs/utils/index.js";
import { Provider } from "react-redux";
import { store } from "@/libs/store/index.js";
import { ConfigProvider } from "antd";
import { theme } from "@/styles/theme/index.js";
import { Loader } from "@/UI/index.js";
import { ModalProvider } from "../../context/index.jsx";
import { Router } from "@/router/index.jsx";

export const App = () => {
  return (
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
  );
};
