import React from 'react';
import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';

import RewardsTable from './rewardsTable';

describe('RewardsTable Component Snapshot', () => {
    let component;

    beforeEach(() => {
        component = renderer.create(
            <RewardsTable data={[]} />
        );
    });

    it('RewardsTable component rendered successfully', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});
describe('RewardsTable Component Behavior Testing', () => {

    it('RewardsTable should show No Records Found', () => {
        render(<RewardsTable data={[]} />);
        expect(screen.getByText(/No Records Found/)).toBeVisible();
    });

    it('RewardsTable should show records', () => {
        render(<RewardsTable data={[{
            "username": "Salma.Runte",
            "date": "2022-06-11T17:33:53.534Z",
            "expenses": 4444.99
        },
        {
            "username": "Ardith_Baumbach90",
            "date": "2022-06-17T15:12:56.849Z",
            "expenses": 3306.93
        }]} />);
        expect(screen.getByText(/Salma.Runte/)).toBeVisible();
    });
});