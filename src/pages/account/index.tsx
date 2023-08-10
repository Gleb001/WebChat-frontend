import AppContainer from "@shared/components/appPattern";
import { useLoaderData } from "react-router-dom";
// @ts-ignore
import userDefaultImage from "@shared/ui/images/data/default_user_photo.jpg";
import "./styles.scss";

export const Account = () => {

    let { firstName, lastName, email, userPhoto } = useLoaderData() as {
        firstName: string,
        lastName: string,
        email: string,
        userPhoto: string
    };

    return (
        <div className="main-window-container">
            <div className="user-account-container">
                <div className="user-photo-container">
                    <img src={userPhoto ?? userDefaultImage} />
                </div>
                <div className="user-field user-name">{
                    firstName + " " + lastName
                }</div>
                <div className="user-field user-email">{
                    "Email: " + email
                }</div>
            </div>
        </div>
    );

};