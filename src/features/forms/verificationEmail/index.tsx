// import
import { useForm } from "react-hook-form";
import { putEmail } from "./api/putEmail";
import {
    FormGetEmailType,
    onSubmit,
    FormData
} from "./types";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { set as setUser } from "@app/redux/reducers/user";
import { StatusContext } from "@features/changePassword";
import { useContext } from "react";

// main
export const FormGetEmail: FormGetEmailType = () => {

    let showNextForm = useContext(StatusContext);

    const dispatch = useAppDispatch();
    let { handleSubmit, register } = useForm<FormData>();

    const onSubmit: onSubmit = async ({ email }) => {
        await putEmail(email);
        dispatch(
            setUser({ email: email })
        );
        showNextForm();
    };

    return (
        <form
            className="form-app"
            onSubmit={handleSubmit(onSubmit)}
        >

            <input
                {...register("email", { required: true })}
                placeholder="Почта"
            />

            <input
                type="submit"
                value="Отправить"
            />

        </form>
    );

};