import { Wrapper, Image } from "./Description.styled";

export function Description({ user: { avatar, username, tag, location } }) {
    return (
        <Wrapper>
            <Image
                src={avatar}
                alt={username}
            />
            <p><b>{username}</b></p>
            <p>{tag}</p>
            <p>{location}</p>
        </Wrapper>
    );
}