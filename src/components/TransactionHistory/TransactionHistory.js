import transactions from './transactions.json'
import { TransactionBody } from "components/TransactionBody/TransactionBody";
import { TransactionHead } from "components/TransactionHead/TransactionHead";

export function TransactionHistory() {
    return (
        <table>
            <TransactionHead transactions={transactions} />
            <TransactionBody transactions={transactions}/>
        </table>  
    );
}