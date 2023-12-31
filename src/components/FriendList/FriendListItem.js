import { Circle, Text } from './FriendList.styled';

export function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
        <>
            <Circle>{isOnline}</Circle>
            <img src={avatar} alt={name} width="48" />
            <Text>{name}</Text>
        </>
    );
}