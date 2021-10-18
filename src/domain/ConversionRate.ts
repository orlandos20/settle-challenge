import ApiClient from '../infrastructure/ApiClient';
import { ApiMethodTypes } from 'entities/ApiMethodTypes';
import CurrencyType from 'entities/CurrencyType';

//Domain ins the folder in charge for bussiness logic.


export default class ConversionRate {

    endpointConstructor = (fromAsset:string, toAsset:string) => {
        return `fromAsset=${fromAsset}&toAsset=${toAsset}&type=buy-crypto&pid=1CmURrXeoKwyXF`
    };


    obtainConversion = async (fromAsset:CurrencyType, toAsset:CurrencyType) => {
        let endpoint = this.endpointConstructor(fromAsset.label, toAsset.label);
        const response = await ApiClient.fetchData({endpoint, method: ApiMethodTypes.GET});
        //Do some logic with response
        return response;
    };

};