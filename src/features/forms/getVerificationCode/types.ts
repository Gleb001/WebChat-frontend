// import =================================================== //
import {FC} from "react";
import type { SubmitHandler} from "react-hook-form";

// main ===================================================== //
// data types ----------------------------------------------- //
interface FormData {
    verificationCode: string
}
type StatusForm = "wait" | "successed" | "rejected";
// functions types ------------------------------------------ //
type FormGetVerificationCodeType = FC
type onSubmit = SubmitHandler<FormData>

// export =================================================== //
export {
    FormGetVerificationCodeType,
    onSubmit,
    FormData,
    StatusForm
};