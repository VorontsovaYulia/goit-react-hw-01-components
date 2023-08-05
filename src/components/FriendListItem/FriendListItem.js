export function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
        <>
            <span>{isOnline}</span>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
        </>
    )
}