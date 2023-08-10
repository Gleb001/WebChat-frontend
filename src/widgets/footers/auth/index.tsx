import { NavLink } from "react-router-dom"
import "./styles.scss";

export const AuthFooter = () => (
    <footer id="auth-footer">
        <nav>
            <NavLink to="/auth/signin">Hi © 2023</NavLink>
            <NavLink to="https://github.com/Gleb001/WebChat-frontend">Github</NavLink>
        </nav>
    </footer>
)