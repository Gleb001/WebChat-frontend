// import =================================================== //
import { ActionFunction, redirect } from "react-router-dom";
import { putEmail } from "../../../verificationEmail/api/putEmail";

// main ===================================================== //
export const hasEmail: ActionFunction = async ({request}) => {
    let formData = await request.formData();
    let data = { email: formData.get("email")! };
    console.log(data);
    let { hasEmail } = await putEmail(data);
    return (
        hasEmail ?
            redirect("/user/" + userId) :
            redirect("/")
    );
};