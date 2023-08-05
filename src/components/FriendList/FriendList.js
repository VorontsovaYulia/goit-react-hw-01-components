import friends from './friends.json'
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export function FriendList() {
    return (
        <ul>
            {friends.map(friend =>
                <li key={friend.id}>
                    <FriendListItem friend={friend} />
                </li>)}
        </ul>
    );
}