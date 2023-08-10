// import =================================================== //
import { Outlet, Route, redirect } from "react-router-dom";
// pages ---------------------------------------------------- //
import { AuthPage } from "./auth";
import { UserPage } from "./user";
import { ErrorPage } from "./errorPage";
import { Account } from "./account";
import { Chats } from "./chats";
// loaders -------------------------------------------------- //
import { loader as AccountLoader } from "./account/loader";
// features ------------------------------------------------- //
import { FormLogin } from "@features/forms/login";
import { loginUserAction } from "@features/forms/login/action";
import { FormSignin } from "@features/forms/signin";
import { signinUserAction } from "@features/forms/signin/action";
import { resetPassword } from "@features/changePassword";
// helper --------------------------------------------------- //
import { Deliver } from "@shared/helpers/deliver";

// main ===================================================== //
export const Routing = () => (
    <>
        <Route path="/*" element={<Outlet />} errorElement={<ErrorPage />}>
            <Route index loader={() => redirect("/auth/")} />
            <Route path="auth" element={<AuthPage />} >
                <Route index loader={() => redirect("signin/")} />
                <Route
                    path="signin"
                    element={
                        <Deliver elements={[
                            FormSignin,
                            resetPassword
                        ]} />
                    }
                    action={signinUserAction}
                />
                <Route
                    path="login"
                    element={
                        <Deliver elements={[
                            FormLogin
                        ]} />
                    }
                    action={loginUserAction}
                />
            </Route>
            <Route path="user/:id" element={<UserPage />} >
                <Route index loader={() => redirect("account")} />
                <Route path="account" element={<Account />} loader={AccountLoader} />
                <Route path="chats" element={<Chats />} />
                {/* <Route path="friends" element={<Friends />} /> */}
                <Route path="settings" element={<p>Settings</p>} />
            </Route>
        </Route>
    </>
);