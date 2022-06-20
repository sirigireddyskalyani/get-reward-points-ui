import React from 'react';
import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Home from './home';

const mockStore = configureStore([]);
const navigateCallback = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));

describe('Home Container Snapshot', () => {
    let store;
    let container;
    let component;
    let testInstance;

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
        testInstance = component.root;
        container = component.container;
    });

    it('Home container rendered successfully', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});
describe('Home Container Behavior Testing', () => {
    let store;
    let container;
    let component;
    let testInstance;

    beforeEach(() => {
        store = mockStore({
            expenses: {
                data: []
            }
        });
    });

    it('Add Expense Button options should exist', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        expect(screen.getAllByTestId('add-expense-btn')).toHaveLength(1);
    });
    it('upload-bulk-expense button option should exist', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        expect(screen.getAllByTestId('upload-bulk-expense-btn')).toHaveLength(1);
    });
    it('handle upload-bulk-expense button click', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        const btn = screen.getAllByTestId('upload-bulk-expense-btn')[0];
        btn.click();
        expect(screen.getAllByTestId('upload-bulk-expense-btn')).toHaveLength(1);
    });
});