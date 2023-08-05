import data from './data.json'
import { StatList } from "components/StatList/StatList";
import { Title } from "components/Title/Title";

export function Statistics() {
    return (
        <div>
            <Title title='Upload stats' />
            <StatList data={data} />
        </div>
    );
}