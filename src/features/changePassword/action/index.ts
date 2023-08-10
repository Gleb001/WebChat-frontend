// import =================================================== //
import { ActionFunction, redirect } from "react-router-dom";

// main ===================================================== //
export const get: ActionFunction = async ({request}) => {
    
    return (
        typeof userId === "string" ?
            redirect("/user/" + userId) :
            redirect("/")
    );
};