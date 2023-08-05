import { TitleText } from "./TransactionHead.styled";

export function TransactionHead({ transactions }) {
    
    const table = Object.keys(transactions[0]).map(obj => {
                 
            if (obj === "id") {
                return null;
            }
           return <TitleText key={obj}>{obj}</TitleText>
    });
    return (
        <thead>
            <tr>
                {table} 
            </tr>    
        </thead>
    );
}