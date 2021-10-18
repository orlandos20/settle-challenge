import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import ConversionRate from '../../domain/ConversionRate';

//Importing types
import CurrencyType from 'entities/CurrencyType';


export type initialStateType = {
    hasError: boolean,
    isLoading: boolean
};


const initialState: initialStateType = {
    hasError: false,
    isLoading: false
}

export const persistConfig = {
    key: "conversionRate",
    storage:storage
};

//Initialize domain here
const Domain = new ConversionRate();

export const getConversionRate = createAsyncThunk('conversionRate/getConversionRate', async (payload:{fromAsset:CurrencyType, toAsset:CurrencyType}): Promise<any> => {
    // consume domain methods here
    let response = await Domain.obtainConversion(payload.fromAsset, payload.toAsset);
    return response;
});


export const ConversionRateSlice = createSlice({
    name: 'conversionRate',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(getConversionRate.pending, (state, action) => {
            state.isLoading = true;
        })
    }
});

export default ConversionRateSlice.reducer;