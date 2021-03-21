import React from 'react';
import PropTypes from 'prop-types';
import style from './Transactions.module.css'


const Transaction = (props) => {
    return (
        <div className={  props.transactions.value >=0 ? style.transaction : style.dangerTrans}>
            <div>value: {props.transactions.value}</div>
            <div>date: {props.transactions.date }</div>
            <div>comment: {props.transactions.comment }</div>
        </div>

    );
};

Transaction.defaultProps = {
    transactions: {
        label: '',
        value: 0
    }
}

Transaction.propTypes = {
    transactions: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number
    })
}

export default Transaction;