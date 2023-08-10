// import =================================================== //
import {FC} from "react";
import type { SubmitHandler} from "react-hook-form";

// main ===================================================== //
// data types ----------------------------------------------- //
interface FormData {
    password: string
}
// functions types ------------------------------------------ //
type FormChangePasswordType = FC
type onSubmit = SubmitHandler<FormData>

// export =================================================== //
export {
    FormChangePasswordType,
    onSubmit,
    FormData
};