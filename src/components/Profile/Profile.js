import user from './user.json'
import { Description } from "components/Description/Description";
import { Stats } from "components/Stats/Stats";
import { Wrapper } from './Profile.styled';


export function Profile() {
    return (
        <Wrapper>
            <Description user={user} />
            <Stats stats={user.stats} />
        </Wrapper>   
    );
}