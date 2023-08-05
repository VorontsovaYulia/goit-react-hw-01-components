import { Value, Row } from "./TransactionBody.styled";

export function TransactionBody({ transactions }) {
    return (
        <tbody>
            {transactions.map(({ id, type, amount, currency }) => (
                <Row key={id}>
                    <Value>{type}</Value>
                    <Value>{amount}</Value>
                    <Value>{currency}</Value>
                </Row>
            ))}
        </tbody>
    );
}