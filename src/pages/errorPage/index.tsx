// import =================================================== //
import { useRouteError } from "react-router-dom";

// main ===================================================== //
export const ErrorPage = () => {
    let error = useRouteError() as {message: string};

    return (
        <div>
            <h1>{error.message}</h1>
        </div>
    );
};