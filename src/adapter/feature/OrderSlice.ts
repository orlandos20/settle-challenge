import {createSlice} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

//Importing types
import IOrder from 'entities/Order';


export type initialStateType = {
    orders: IOrder[] | [],
    hasError: boolean,
    isLoading: boolean
};


const initialState: initialStateType = {
    orders: [],
    hasError: false,
    isLoading: false
}

export const persistConfig = {
    key: "orders",
    storage:storage
};

//Initialize domain here
// const Domain = new ConversionRate();


export const OrderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers:{
        updateOrders: (state, action) => {
            state.orders = [...state.orders, action.payload]
        }
    },
    extraReducers: (builder) => {
    }
});

export const {updateOrders} = OrderSlice.actions;
export default OrderSlice.reducer;