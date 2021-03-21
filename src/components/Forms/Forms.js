import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Comment, Input, Row, Wrapper} from "./FormsStyle";

const Forms = (props) => {
    const [form, setForms] = useState({
        value: '',
        date: new Date().toISOString().substring(0, 10),
        comment: ''
    })


    const onSubmit = (e) => {
        e.preventDefault()
            props.onChange(form)

            setForms({
                ...form,
                value: '',
                comment: ''
            })

    }

    const onChange = (e) => {
        const {value, name} = e.target
        setForms({
            ...form,
            [name]: value
        })
    }


    return (
        <Wrapper>
            <form onSubmit={onSubmit}>
                <Row>
                    <Input type="date"
                           name='date'
                           value={form.date}
                           onChange={onChange}
                    />
                    <Input type='number'
                           value={form.value}
                           name='value'
                           placeholder='Сума'
                           onChange={onChange}
                    />
                </Row>
                <Row>
                    <Comment name="comment"
                             value={form.comment}
                             onChange={onChange}
                    />
                    <Button>Зберегти</Button>
                </Row>
            </form>
        </Wrapper>
    );

}

Forms.propTypes = {
    onChange: PropTypes.func
}
export default Forms;