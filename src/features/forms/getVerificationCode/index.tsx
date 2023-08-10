// import =================================================== //
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// helpers -------------------------------------------------- //
import convertToMinutes from "./helpers/convertToMinutes";
// types ---------------------------------------------------- //
import {
    FormGetVerificationCodeType,
    onSubmit,
    FormData,
    StatusForm,
} from "./types";
import { useAppSelector } from "@shared/hooks/useAppSelector";
import { useInterval } from "@shared/hooks/useInterval";

// export =================================================== //
export const FormGetVerificationCode: FormGetVerificationCodeType = () => {

    const email = useAppSelector(state => state.user.email);

    let { handleSubmit, register } = useForm<FormData>();
    let [status, setStatus] = useState<StatusForm>("wait");

    let [countdown, setCountdown] = useState(60);
    useInterval(() => setCountdown(countdown - 1), 1);

    const onSubmit: onSubmit = async ({ verificationCode }) => {
        let isValidCode = await fetch("", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ verificationCode }, null, 2)
        });
        setStatus(isValidCode ? "successed" : "rejected");
    };

    let isWait = countdown > 0;
    return (

        <form
            className="form-app"
            onSubmit={handleSubmit(onSubmit)}
        >

            <input
                {...register("verificationCode", { required: true })}
                placeholder="Введите проверочный код"
            />

            <button disabled={isWait}>{
                `
                    Повторно отправить код на почту
                    ${isWait && "через " + convertToMinutes(countdown)}
                `
            }</button>

            <input
                type="submit"
                value="Отправить"
            />

        </form>

    );

};
