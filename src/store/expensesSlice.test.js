import { store } from './index'
import { addExpense, expensesFileData } from './expensesSlice';

describe('Store expensesSlice', () => {

    it('Should add given expense record', async () => {
        const { payload } = await addExpense({
            "username": "Ardith_Baumbach90",
            "date": "2022-06-17T15:12:56.849Z",
            "expenses": 3306.93
        })(store.dispatch)
        const state = store.getState().expenses
        expect(state).toEqual({ data: [payload] })
    })

    it('Should load expenses list', async () => {
        const { payload } = await expensesFileData({data: [
            {
                "username": "Ardith_Baumbach90",
                "date": "2022-06-17T15:12:56.849Z",
                "expenses": 3306.93
            },
            {
                "username": "Royal.Walter5",
                "date": "2022-06-02T07:45:52.563Z",
                "expenses": 2710.06
            },
            {
                "username": "Bridget_Friesen",
                "date": "2022-06-18T01:51:12.783Z",
                "expenses": 4040.34
            },
            {
                "username": "Leonardo4",
                "date": "2022-05-24T19:17:24.324Z",
                "expenses": 10
            },
        ]})(store.dispatch)
        const state = store.getState().expenses
        expect(state.data.length).toEqual(5)
    })
})