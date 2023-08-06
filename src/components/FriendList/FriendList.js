import { FriendListItem } from './FriendListItem';
import { List, ListItem } from './FriendList.styled';

export function FriendList({friends}) {
    return (
        <List>
            {friends.map(friend => (
            <ListItem key={friend.id}>
                    <FriendListItem friend={friend} />
            </ListItem>))}
        </List>
    );
}