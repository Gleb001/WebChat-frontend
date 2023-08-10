// import =================================================== //
// react ---------------------------------------------------- //
import React from "react";
import { createRoot } from "react-dom/client";
// components ----------------------------------------------- //
import { App } from "./app";
// redux ---------------------------------------------------- //
import { store } from "@app/redux";
import { Provider } from "react-redux";
// ui ------------------------------------------------------- //
import "@shared/ui/index.scss";

// main ===================================================== //
const rootRef = document.getElementById("root")!;
const ROOT = createRoot(rootRef);
ROOT.render(
    <React.StrictMode>
        <Provider store={store} >
            <App />
        </Provider>
    </React.StrictMode>
);