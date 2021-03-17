import {Component} from 'react'
import Balance from "../Balance/Balance";
import {Wrapper} from "../App/style";
import Forms from "../Forms/Forms";
import TransactionsMap from "../TransactionsMap/TransactionsMap";

let id = 0

class Home extends Component {
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {
            balance: 0,
            transactions: [],

        }
        this.onChange = this.onChange.bind(this)
    }

    onChange = (value) => {
        this.setState((state) => ({
            balance: state.balance + Number(value),
            transactions: [{
                value,
                label: 'change',
                id: ++id
            }, ...state.transactions]
        }))
    }


    render() {
        console.log('render')
        return (
            <Wrapper>
                <Balance balance={this.state.balance}
                         transactions={this.state.transactions}>
                </Balance>
                <hr/>
                <Forms onChange={this.onChange}/>
                <br/>
                <TransactionsMap transactions={this.state.transactions}/>

            </Wrapper>

        )
    }

}

export default Home