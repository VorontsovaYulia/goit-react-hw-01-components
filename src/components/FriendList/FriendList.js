import friends from './friends.json'
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import { List, ListItem } from './FriendList.styled';

export function FriendList() {
    return (
        <List>
            {friends.map(friend =>
                <ListItem key={friend.id}>
                    <FriendListItem friend={friend} />
                </ListItem>)}
        </List>
    );
}