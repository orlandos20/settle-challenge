import {AppDispatch} from '../../adapter/reduxHooks/store';
import CurrencyType from '../../entities/CurrencyType';

//Import Adapter methods
import {getConversionRate} from '../../adapter/feature/ConversionSlice';

export const IgetConversionRate = async (fromAsset:CurrencyType, toAsset:CurrencyType, dispatch:AppDispatch) => {
    let payload = {
        fromAsset, 
        toAsset
    }
    const response = await dispatch(getConversionRate(payload));
    // parse data for UI here using response
    return response.payload;
}