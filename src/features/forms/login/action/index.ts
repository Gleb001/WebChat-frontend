// import =================================================== //
import { ActionFunction, redirect } from "react-router-dom";
import { postUser } from "../api";

// main ===================================================== //
export const loginUserAction: ActionFunction = async ({ request }) => {

    const formData = await request.formData();

    let userId = formData.get("userId")!;
    let firstName = formData.get("firstName")!;
    let lastName = formData.get("lastName")!;
    let data = {
        userId: userId as string,
        firstName: (firstName ? firstName : "firstName-" + userId) as string,
        lastName: (lastName ? lastName : "lastName-" + userId) as string,
        email: formData.get("email")! as string,
        password: formData.get("password")! as string
    };

    let { userAdded } = await postUser(data);

    return userAdded ? redirect(`/user/${data.userId}`) : null;
};