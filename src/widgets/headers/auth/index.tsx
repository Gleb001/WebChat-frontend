// import
import { LogoApp } from "@shared/components/logoApp";
import { NavLink } from "react-router-dom";
import "./styles.scss";

// main
export const AuthHeader = () => (
    <header id="auth-header">
        <nav>
            <NavLink to="/auth/signin">
                <LogoApp />
            </NavLink>
        </nav>
    </header>
);