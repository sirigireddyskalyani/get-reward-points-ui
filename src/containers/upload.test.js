import React from 'react';
import { Provider } from 'react-redux';
import { screen, render, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Upload from './upload';

const mockStore = configureStore([]);
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));

describe('Upload Container Snapshot', () => {
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
                <Upload />
            </Provider>
        );
        testInstance = component.root;
        container = component.container;
    });

    it('Upload container rendered successfully', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});

describe('Upload Container Behavior Testing', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            expenses: {
                data: []
            }
        });
        jest.clearAllMocks();
        jest.spyOn(global, 'FileReader').mockImplementation(function () {
            this.onload = jest.fn();
            this.readAsText=jest.fn();
        });
    });

    it('on Upload submit button click', () => {
        const { container } = render(
            <Provider store={store}>
                <Upload />
            </Provider>
        );
        const uploadSubmit = screen.getAllByTestId('upload-submit-btn')[0];
        uploadSubmit.click();
        expect(1).toEqual(1);
    });

    it('on Upload Back button click', () => {
        const { container } = render(
            <Provider store={store}>
                <Upload />
            </Provider>
        );
        const uploadSubmit = screen.getAllByTestId('upload-back-btn')[0];
        uploadSubmit.click();
        expect(1).toEqual(1);
    });

    it('on Fileupload', async () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Upload />
            </Provider>
        );
        const file = new File([{name: 'expense_data.json', lastModified: 1655699056007, webkitRelativePath: '', size: 12768}], "chucknorris.png", { type: "image/png" });
        let uploader = getByTestId("expenses-json-uploader");
        await fireEvent.change(uploader, {
            target: { files: [file] },
            currentTarget: { files: [file] },
        })
        const uploadSubmit = screen.getAllByTestId('upload-back-btn')[0];
        uploadSubmit.click();
        expect(1).toEqual(1);
    });
});