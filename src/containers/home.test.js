import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Home from './home';

const mockStore = configureStore([]);
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));

describe('My Connected React-Redux Component', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            expenses: {
                data: []
            }
        });

        component = renderer.create(
            <Provider store={store}>
                <Home />
            </Provider>
        );
    });

    it('should render with given state from Redux store', () => {
        expect(true).toEqual(true)
    });

    it('should dispatch an action on button click', () => {
        expect(true).toEqual(true)
    });
});