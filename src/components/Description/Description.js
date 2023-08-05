export function Description({ user: { avatar, username, tag, location } }) {
    return (
        <div>
            <img
                src={avatar}
                alt={username}
                className="avatar"
            />
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>
    );
}