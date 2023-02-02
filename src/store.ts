import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import navReducer from './reducers/navSlice';
import leagueReducer from './reducers/leagueSlice';

export function makeStore() {
    return configureStore({
        reducer: {
            nav: navReducer,
            league: leagueReducer,
        },
    })
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export default store;