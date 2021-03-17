import React from 'react';
import style from './Balance.module.css'

const Balance = (props) => {
    return (
        <div className={style.text}>
            <h1>
                <hr/>
                {props.children}
                <span className={style.number}>   Balance: {props.balance} .грн</span> <br/>
                {props.balance === 0 ? 'У вас нуль гривень!' : props.balance < 0 ? 'Ви в мінусах!' :
                    'У вас є багато грошей, поділіться з ближніми!'}

            </h1>
        </div>
    );
};

export default Balance;