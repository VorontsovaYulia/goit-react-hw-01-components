import { Value, Row } from "./TransactionBody.styled";

export function TransactionBody({ transactions }) {
    return (
        <tbody>
            {transactions.map(({ id, type, amount, currency}, index) => (
                <Row key={id} className ={(index % 2 === 0) ? true : false }>
                    <Value>{type}</Value>
                    <Value>{amount}</Value>
                    <Value>{currency}</Value>
                </Row>
            ))}
        </tbody>
    );
}