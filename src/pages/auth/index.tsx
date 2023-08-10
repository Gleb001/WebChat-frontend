// import =================================================== //
import { useOutlet } from "react-router-dom";
import { AuthHeader } from "@widgets/headers/auth";
import { AuthMain } from "@widgets/mains/auth";
import { AuthFooter } from "@widgets/footers/auth";

// main ===================================================== //
export const AuthPage = () => {

    let ReactProvider = useOutlet()!;
    let RenderedRoute = ReactProvider.props.children;
    let Deliver = RenderedRoute.props.children;
    let [Form, DialogBox] = Deliver.props.elements;

    return (
        <>
            <AuthHeader />
            <AuthMain>
                <Form />
                {DialogBox && <DialogBox />}
            </AuthMain>
            <AuthFooter />
        </>
    )
};