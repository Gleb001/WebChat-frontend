// import =================================================== //
import { useLoaderData } from "react-router-dom";
// @ts-ignore
import userDefaultImage from "@shared/ui/images/data/default_user_photo.jpg";
import "./styles.scss";
import { Search } from "@widgets/search";
import { UserView } from "@entities/userView";

// type ===================================================== //
type FriendType = {
    firstName: string,
    lastName: string,
    photo: string
}

// helpers ================================================== //
function getListFriends(friends: FriendType[]): React.ReactNode {
    if (!friends || !friends.length) return "У вас нет друзей ;<";

    return (
        <>{
            friends.map(
                ({ firstName, lastName, photo }) => (
                    <UserView
                        name={firstName + " " + lastName}
                        photo={photo}
                    />
                )
            )
        }</>
    );
}

// main ===================================================== //
export const Friends = () => {

    let friends = useLoaderData() as FriendType[];

    return (
        <div className="friends-container">
            <Search />
            <div className="friend-list">{
                getListFriends(friends)
            }</div>
        </div>
    );

};