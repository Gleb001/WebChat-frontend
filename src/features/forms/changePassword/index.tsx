// import =================================================== //
import { useForm } from "react-hook-form";
import {
    FormChangePasswordType,
    onSubmit,
    FormData
} from "./types";
import { postPassword } from "./api/postPassword";

// main ===================================================== //
export const FormChangePassword: FormChangePasswordType = () => {

    let { handleSubmit, register } = useForm<FormData>();

    const onSubmit: onSubmit = async ({ password }) => {
        let isSuccess = await postPassword(password);
        return isSuccess;
    };

    return (
        <form
            className="form-app"
            onSubmit={handleSubmit(onSubmit)}
        >

            <input
                { ...register( "password", { required: true }) }
                placeholder="Новый пароль"
            />

            <input
                type="submit"
                value="Отправить"
            />

        </form>
    );

};