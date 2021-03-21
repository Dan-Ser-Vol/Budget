import React from 'react'
import Transaction from "./Transaction";
import {shallow} from 'enzyme'

describe('Transaction component', ()=>{
    let sut;
    let props;
    beforeEach(()=>{
         props = {
            transaction: {
                value: 23,
                comment: 'test',
                date: '12. 12. 12'
            }
        }
         sut = shallow(<Transaction {...props}/>)
    })
    it('should show transactions', () => {
        expect(sut).toMatchSnapshot()
    })
    it('should show 2 zeros after amount', () => {
        expect(sut.find('Value').text()).toBe('23.00')
    })
})