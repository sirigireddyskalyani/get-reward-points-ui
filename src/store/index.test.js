import {store} from './index'

describe('Store Initializes', () => {
    it('Should Expense slice state added', () => {
        const state = store.getState().expenses
        expect(state.expenses).toEqual(undefined)
    })
})