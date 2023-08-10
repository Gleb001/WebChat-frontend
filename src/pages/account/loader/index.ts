// import
import { LoaderFunction } from "react-router-dom";
import { getUser } from "../api";

// main
export const loader: LoaderFunction = async ({params}) => {
    let { id } = params as { id: string };
    let userData = await getUser(id);
    return userData;
};