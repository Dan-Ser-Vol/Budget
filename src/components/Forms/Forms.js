import React from 'react';
import PropTypes from 'prop-types';

class Forms extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            date: '',
            comment: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onChange(this.state.value)
        {
            this.setState({
                value: '',
                date: '',
                comment: ''
            })
        }
    }

    onChange = (e) => {
        const {value, name} = e.target
        this.setState({
           [name]: value === 'balance' ? +value : value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="date"
                           name='date'
                           value={this.state.date}
                           onChange={this.onChange}
                    />
                    <input type='number'
                           value={this.state.value}
                           name='value'
                           placeholder='Сума'
                           onChange={this.onChange}
                    />
                    <textarea name="comment"
                              value={this.state.comment}
                              onChange={this.onChange}
                    />
                    <hr/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

Forms.propTypes = {
    onChange: PropTypes.func
}
export default Forms;