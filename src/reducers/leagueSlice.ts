import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LeagueState = {
    regions: string[],
    selected_region: string,
    user_input: string,
    region_menu: boolean,
}

const initialState: LeagueState = {
    regions: ['na1', 'eun1', 'euw1', 'la1',
        'la2', 'br1', 'oc1', 'ru',
        'tr1', 'jp1', 'kr', 'ph2',
        'sg2', 'tw2', 'th2', 'vn2'],
    selected_region: 'na1',
    user_input: '',
    region_menu: false,
}

export const leagueSlice = createSlice({
    name: 'league',
    initialState,
    reducers: {
        selectRegion: (state, action: PayloadAction<string>) => {
            state.selected_region = action.payload;
            state.regions = [action.payload, ...state.regions.filter((region) => region !== action.payload)];
        },
        setRegionMenu: (state, action: PayloadAction<boolean>) => {
            state.region_menu = action.payload;
        },
        updateUserInput: (state, action: PayloadAction<string>) => {
            state.user_input = action.payload;
        }
    },
});

export const { updateUserInput, selectRegion, setRegionMenu } = leagueSlice.actions;
export default leagueSlice.reducer;