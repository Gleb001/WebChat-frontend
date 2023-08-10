// import =================================================== //
import {FC} from "react";
import type { SubmitHandler} from "react-hook-form";

// main ===================================================== //
// data types ----------------------------------------------- //
interface FormData {
    email: string
}
// functions types ------------------------------------------ //
type FormGetEmailType = FC
type onSubmit = SubmitHandler<FormData>

// export =================================================== //
export {
    FormGetEmailType,
    onSubmit,
    FormData
};