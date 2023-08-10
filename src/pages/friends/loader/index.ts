// import
import { LoaderFunction } from "react-router-dom";
import { getUserData } from "../api";

// main
export const loader: LoaderFunction = async ({params}) => {
    let { id } = params as { id: string };
    let dataUser = await getUserData(id);
    return dataUser;
};