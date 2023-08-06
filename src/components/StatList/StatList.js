import { List, ListItems } from "./StatList.styled";

const setBg = () => {
  const color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
}

export function StatList({ data }) {
    const stats = data.map(({ id, label, percentage }) =>
        <ListItems key={id} style={{ backgroundColor: setBg()}}>
            <span>{label}</span>
            <span><b>{percentage}%</b></span>
        </ListItems>
    );
    
    return (
        <List>
            {stats}
        </List>
    );
}