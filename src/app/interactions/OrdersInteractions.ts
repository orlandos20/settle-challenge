import {AppDispatch} from '../../adapter/reduxHooks/store';
import IOrder from '../../entities/Order';

import {updateOrders} from '../../adapter/feature/OrderSlice';


export const IupdateOrders = async (order:IOrder, dispatch:AppDispatch) => {
    const response = await dispatch(updateOrders(order));
    // parse data for UI here using response
    return response.payload;
};
