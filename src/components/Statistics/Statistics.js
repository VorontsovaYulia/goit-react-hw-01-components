import data from './data.json'
import { StatList } from "components/StatList/StatList";
import { Title } from "components/Title/Title";
import { Wrapper } from './Statistics.styled';

export function Statistics() {
    return (
        <Wrapper>
            <Title title='Upload stats' />
            <StatList data={data} />
        </Wrapper>
    );
}