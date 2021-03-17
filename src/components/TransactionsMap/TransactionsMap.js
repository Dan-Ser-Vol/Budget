import React from 'react';
import Transaction from "../Transaction/Transaction";
import PropTypes from 'prop-types';

const TransactionsMap = (props) => {
    return (
        <div>
            {props.transactions.map((transactions) => <Transaction key={transactions.id}
                                                                   transactions={transactions}
            />)}
        </div>
    );
};



TransactionsMap.propTypes = {
    transactions: PropTypes.array
}
TransactionsMap.defaultProps = {
    transactions: []
}
export default TransactionsMap;