// import =================================================== //
// types ---------------------------------------------------- //
import type {FC} from "react";
// middleware forms ----------------------------------------- //
import { FormGetEmail } from "@features/forms/verificationEmail";
import { FormChangePassword } from "@features/forms/changePassword";
import { FormGetVerificationCode } from "@features/forms/getVerificationCode";

// types ==================================================== //
interface middlewareFormType {
    description: string,
    MiddlewareForm: FC,
}

// main ===================================================== //
export const middlewareForms: middlewareFormType[] = [
    {
        description: `
            Введите почту, за которой закреплён ваш аккаунт
        `,
        MiddlewareForm: FormGetEmail,
    },
    {
        description: `
            Введите проверочный код, который мы отправили
            вам на почту
        `,
        MiddlewareForm: FormGetVerificationCode
    },
    {
        description: `
            Введите новый пароль
        `,
        MiddlewareForm: FormChangePassword
    },
];