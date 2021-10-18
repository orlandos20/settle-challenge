interface IOrder {
    orderType: string,
    operationType: string,
    currencyPair: string,
    orderId: string,
    orderExecutionTime: number,
    amount: number,
    price: number,
    fee: number,
    totalOrderPrice: number,
    fromAsset: string, 
    toAsset: string
};

export default IOrder;