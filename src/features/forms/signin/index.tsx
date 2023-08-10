// import =================================================== //
import { Form } from "react-router-dom";
import {FC} from "react";

// main ===================================================== //
export const FormSignin: FC = () => (
    <Form
        className="form-app"
        method="post"
        action="/auth/signin"
    >

        <label>
            Почта
            <input
                type="email"
                name="email"
                placeholder="Введите вашу почту"
                required
            />
        </label>

        <label>
            Пароль
            <input
                type="password"
                name="password"
                placeholder="Введите ваш пароль"
                required
            />
        </label>

        <input
            type="submit"
            value="Войти"
        />

    </Form>
);