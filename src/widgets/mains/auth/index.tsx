// import
import { FC } from "react";
import { NavLink } from "react-router-dom"
import "./styles.scss";

// type
type AuthMainType = FC<{
    children: (JSX.Element)[]
}>

// main
export const AuthMain: AuthMainType = ({
    children
}) => {

    let [form, dialogBox] = children;

    return (
        <main id="auth-main">
            <nav className="auth-navigation">
                <NavLink to="/auth/signin"> Войти в аккаунт    </NavLink>
                <NavLink to="/auth/login" > Зарегистрироваться </NavLink>
            </nav>
            <div className="auth-form-container">
                {form}
            </div>
            {
                dialogBox &&
                <div className="auth-dialog-box-container">
                    {dialogBox}
                </div>
            }

        </main>
    );
    
};