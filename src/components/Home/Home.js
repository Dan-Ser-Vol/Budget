import {useEffect, useState} from 'react'
import Balance from "../Balance/Balance";
import {Wrapper} from "../App/style";
import Forms from "../Forms/Forms";
import TransactionsMap from "../TransactionsMap/TransactionsMap";
import {addItem, getItems} from "../../utils/indexdb";


const Home = () => {
    const [balance, setBalance] = useState(0)
    const [transactions, setTransactions] = useState([])


    useEffect(() => {
        getItems().then((item) => {
            setTransactions(item)
        }).catch((e) => {
        })
    }, [setTransactions])


    const onChange = ({value, date, comment}) => {
        const transaction = {
            value: +value,
            comment,
            date,
            id: Date.now()
        }
        setTransactions([
            transaction,
            ...transactions
        ])
        setBalance(balance + Number(value))
        addItem(transaction)
    }

    return (
        <Wrapper>
            <Balance balance={balance}
                     transactions={transactions}>
            </Balance>
            <hr/>
            <Forms onChange={onChange}/>
            <br/>
            <TransactionsMap transactions={transactions}/>

        </Wrapper>

    )

}

export default Home