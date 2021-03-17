import React from 'react';
import PropTypes from 'prop-types';
import style from './Transactions.module.css'


const Transaction = (props) => {
    return (
        <div className={  props.transactions.value >=0 ? style.transaction : style.dangerTrans}>
            <div> label: {props.transactions.label}</div>
            <div>value: {props.transactions.value }</div>
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