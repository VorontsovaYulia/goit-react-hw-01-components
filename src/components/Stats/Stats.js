import { List, ListItems, Span } from "./Stats.styled";

export function Stats({ stats: { followers, views, likes } }) {
    return (
        <List>
            <ListItems>
                <span>Followers</span>
                <Span>{followers}</Span>
            </ListItems>
            <ListItems>
                <span>Views</span>
                <Span>{views}</Span>
            </ListItems>
            <ListItems>
                <span>Likes</span>
                <Span>{likes}</Span>
            </ListItems>
        </List>
    );
}