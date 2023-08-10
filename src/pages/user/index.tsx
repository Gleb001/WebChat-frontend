import AppContainer from "@shared/components/appPattern";
import { NavLink, Outlet } from "react-router-dom";
import "./styles.scss";

export const UserPage = () => {
    return (
        <AppContainer.self>

            <AppContainer.LeftSidebar>
                <nav id="nav-left-sidebar">
                    <NavLink to="account"  > account </NavLink>
                    <NavLink to="chats"    > chats </NavLink>
                    <NavLink to="friends"  > friends </NavLink>
                    <NavLink to="settings" > settings </NavLink>
                </nav>
            </AppContainer.LeftSidebar>

            <AppContainer.MainWindow>
                <Outlet />
            </AppContainer.MainWindow>

        </AppContainer.self>
    );
}