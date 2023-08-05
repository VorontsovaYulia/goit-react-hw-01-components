import user from './user.json'
import { Description } from "components/Description/Description";
import { Stats } from "components/Stats/Stats";


export function Profile() {
    return (
        <div>
            <Description user={user} />
            <Stats stats={user.stats} />
        </div>   
    );
}