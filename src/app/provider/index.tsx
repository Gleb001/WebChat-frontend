// import
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import React from "react";

// export
export function AppProvider(component: () => React.ReactNode) {
    let browserRouter = createBrowserRouter(
        createRoutesFromElements(
            component()
        ),
    );

    return (
        <RouterProvider router={browserRouter} />
    );
}