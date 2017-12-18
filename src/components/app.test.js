import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const app = shallow(<App />);

describe('App', () => {

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });
    
    it('initialize the `state` of app with an empty list of gift', () => {
        expect(app.state().gifts).toEqual([]);
    });
    
    describe('When clicking the add button', () => {
        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });

        afterEach(() => {
            app.setState({
                gifts: []
            });
        });

        it('add a new gift to the `state`', () => {
            expect(app.state().gifts).toEqual([{ id: 1}]);
        })
        
        it('add a new gift to the rendered gift list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        
        });


    });
});
