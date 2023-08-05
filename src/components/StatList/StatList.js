import { List, ListItems } from "./StatList.styled";

export function StatList({ data }) {
    const stats = data.map(({ id, label, percentage }) =>
    <ListItems key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
    </ListItems>
    )
    
    return (
        <List>
            {stats}
        </List>
    );
}