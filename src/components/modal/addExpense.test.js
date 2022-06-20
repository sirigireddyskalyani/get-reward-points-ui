import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { screen, render, fireEvent } from '@testing-library/react';

import AddExpense from './addExpense';

const mockStore = configureStore([]);
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useDispatch: () => (jest.fn())
}));
describe('HorizontalNavigator Component Snapshot', () => {
    let component;

    beforeEach(() => {
        const store = mockStore({
            expenses: {
                data: []
            }
        });
        component = renderer.create(
            <Provider store={store}>
                <AddExpense />
            </Provider>
        );
    });

    it('AddExpense component rendered successfully', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});
describe('Home Container Behavior Testing', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            expenses: {
                data: []
            }
        });
    });

    it('check addExpense form Validations', async () => {
        const {container} = render(
            <Provider store={store}>
                <AddExpense />
            </Provider>
        );
        const submitBtn = screen.getAllByTestId('add-expense-submit-btn')[0];
        submitBtn.click();
        expect(container.querySelector('input[name="username"]').value).toEqual("");

        const username = container.querySelector('input[name="username"]');
        await fireEvent.change(username, {
            target: {
                value: "mock@email.com"
            }
        })
        submitBtn.click();
        expect(container.querySelector('input[name="username"]').value).toEqual("mock@email.com");

        const expenses = container.querySelector('input[name="expenses"]');
        await fireEvent.change(expenses, {
            target: {
                value: 0
            }
        })
        submitBtn.click();
        expect(container.querySelector('input[name="expenses"]').value).toEqual("0");
    });

    it('check addExpense form Validations', async () => {
        const {container} = render(
            <Provider store={store}>
                <AddExpense />
            </Provider>
        );
        const username = container.querySelector('input[name="username"]');
        await fireEvent.change(username, {
            target: {
                value: "mock@email.com"
            }
        })
        const expenses = container.querySelector('input[name="expenses"]');
        await fireEvent.change(expenses, {
            target: {
                value: 0
            }
        })

        const submitBtn = screen.getAllByTestId('add-expense-submit-btn')[0];
        submitBtn.click();
        expect(container.querySelector('input[name="expenses"]').value).toEqual("0");
    });

    it('handle closeModal button click', async () => {
        const {container} = render(
            <Provider store={store}>
                <AddExpense />
            </Provider>
        );
        const closeModal = screen.getAllByTestId('add-expense-modal-close-btn')[0];
        closeModal.click();
        expect(container.querySelector('input[name="expenses"]').value).toEqual("");
    });

    it('handle addExpense button click', async () => {
        const {container} = render(
            <Provider store={store}>
                <AddExpense />
            </Provider>
        );
        const addExpenseBtn = screen.getAllByTestId('add-expense-btn')[0];
        addExpenseBtn.click();
        expect(container.querySelector('input[name="expenses"]').value).toEqual("");
    });


    it('handle add new expense', async () => {
        const {container} = render(
            <Provider store={store}>
                <AddExpense />
            </Provider>
        );
        await fireEvent.change(username, { target: { value: "Smith" } });
        await fireEvent.change(expenses, { target: { value: "90" } });

        const submitBtn = screen.getAllByTestId('add-expense-submit-btn')[0];
        submitBtn.click();
        expect(container.querySelector('input[name="expenses"]').value).toEqual("90");
    });

    it('handle add new expense', async () => {
        const {container} = render(
            <Provider store={store}>
                <AddExpense />
            </Provider>
        );
        await fireEvent.change(username, { target: { value: "Smith" } });

        const submitBtn = screen.getAllByTestId('add-expense-submit-btn')[0];
        submitBtn.click();
        expect(container.querySelector('input[name="expenses"]').value).toEqual("");
    });
});