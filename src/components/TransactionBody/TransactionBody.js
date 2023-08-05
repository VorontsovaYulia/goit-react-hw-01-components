
export function TransactionBody({ transactions }) {
    return (
        <tbody>
            {transactions.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            ))}
        </tbody>
    );
}