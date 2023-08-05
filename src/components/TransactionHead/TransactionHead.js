export function TransactionHead({ transactions }) {
    
    const table = Object.keys(transactions[0]).map(obj => {
                 
            if (obj === "id") {
                return null;
            }
           return <th key={obj}>{obj}</th>
    });
    return (
        <thead>
            <tr>
                {table} 
            </tr>    
        </thead>
    );
}