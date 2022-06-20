import React from 'react';
import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';

import HorizontalNavigator from './index';

describe('HorizontalNavigator Component Snapshot', () => {
    let component;

    beforeEach(() => {
        component = renderer.create(
            <HorizontalNavigator />
        );
    });

    it('HorizontalNavigator component rendered successfully', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});
describe('HorizontalNavigator Component Behavior Testing', () => {

    it('HorizontalNavigator show Get Reward Points heading ', () => {
        render(<HorizontalNavigator />);
        expect(screen.getByText(/Get Reward Points/)).toBeVisible();
    });
});