import "./index.scss";
import { FC } from "react";
// @ts-ignore
import defaultUserPhoto from "../../shared/ui/images/data/default_user_photo.jpg";

// type
type UserViewType = FC<{
    name: string, 
    photo: string,
}>

export const UserView: UserViewType = ({ name, photo }) => {
    return(
        <div className="user-view">
            <img src={photo !== "" ? photo : defaultUserPhoto} />
            <span className="user-name">{name}</span>
        </div>
    );
}