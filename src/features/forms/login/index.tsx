// import =================================================== //
import { Form } from "react-router-dom";
import { getUserId } from "@shared/lib/getUserId";
import { FC } from "react";

// main ===================================================== //
export const FormLogin: FC = () => (
    <Form className="form-app" method="post" action="/auth/login" >

        <input
            type="hidden"
            name="userId"
            defaultValue={getUserId()}
        />

        <label>
            Имя
            <input
                type="text"
                name="firstName"
                pattern="[a-Zа-Я]"
                placeholder="Имя"
            />
        </label>

        <label>
            Фамилия
            <input
                type="text"
                name="lastName"
                pattern="[a-Zа-Я]"
                placeholder="Фамилия"
            />
        </label>

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
            value="Зарегистрироваться"
        />

    </Form>
);