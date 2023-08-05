import transactions from './transactions.json'
import { TransactionBody } from "components/TransactionBody/TransactionBody";
import { TransactionHead } from "components/TransactionHead/TransactionHead";
import { Wrapper } from './TransactionHistory.styled';

export function TransactionHistory() {
    return (
        <Wrapper>
            <TransactionHead transactions={transactions} />
            <TransactionBody transactions={transactions}/>
        </Wrapper>  
    );
}