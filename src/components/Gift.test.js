import React from 'react';
import {shallow} from 'enzyme';
import Gift from './Gift'

describe('Gift', () => {
    const mockRemove = jest.fn()
    const id = 1
    const props = {gift: {id}, removeGift: mockRemove};
    const gift = shallow(<Gift {...props} />);

    it('render properly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initialize a person and a gift in the `state`', () => {
        expect(gift.state()).toEqual({person : '', present : '' });
    }); 

    describe('When typing into the person input', () => {
        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target : {value: 'uncle'}});

        }); 

        it('update the person in the `state`', () => {
            expect(gift.state().person).toEqual('uncle')
        });
    });

    describe('When typing into the present input', () => {
        beforeEach(() => {
            gift.find('.input-present').simulate('change', { target : {value: 'golf clubs'}});

        }); 

        it('update the present in the `state`', () => {
            expect(gift.state().present).toEqual('golf clubs')
        });
    });

    
    describe('when clicking on the `remove gift` button', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        });
    
        it('calls the removeItem function', () => {
            expect(mockRemove).toHaveBeenCalledWith(id)
        });
        
    });
    
});
