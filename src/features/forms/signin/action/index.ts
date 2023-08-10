// import =================================================== //
import { ActionFunction, redirect } from "react-router-dom";
import { postAuth } from "../api";

// main ===================================================== //
export const signinUserAction: ActionFunction = async ({ request }) => {

    let formData = await request.formData();
    let data = {
        email: formData.get("email")!,
        password: formData.get("password")!
    };

    let { userId } = await postAuth(data);

    return redirect(
        typeof userId === "string" ?
            "/user/" + userId :
            "/"
    );
    
};