import {useState, useCallback, useEffect, useRef} from 'react';
import moment from 'moment';
import OrderBookTable from '../organisms/OrderBookTable';
import IOrder from '../../../entities/Order';

type OrderBookProps = {
    orders: IOrder[],
};

const operationTypes = [
    {
        value: 0,
        label: 'BUY'
    },
    {
        value: 1,
        label: 'SELL'
    }
]

const OrderBook: React.FC<OrderBookProps> = ({orders}) => {
    const [filtered, setFiltered] = useState<any[]>(orders);
    let filteringInterval = useRef<any>();
    let firstRender = useRef<boolean>(true);
    
    const buyOperations = filtered?.filter((order:IOrder) => order.operationType === operationTypes[0].label);
    const sellOperations = filtered?.filter((order:IOrder) => order.operationType !== operationTypes[0].label);

     const timeLapseVerifier = useCallback(()=>{
            let filteredData = orders.map((order:IOrder) => {
                let orderExecutionTime = moment(order.orderExecutionTime);
                let now = moment();
                if(now.diff(moment(orderExecutionTime, 'DD-MM-YYYY'), 'minutes') < 1){
                    return order;
                };
                return undefined;
            });
            setFiltered(filteredData.filter(item => item !== undefined))
    },[orders]);

    useEffect(()=>{
        if(firstRender.current){
            timeLapseVerifier();
            firstRender.current = false;
        };
    },[timeLapseVerifier])

    useEffect(()=>{
       
        if(orders && orders.length > 0){
                filteringInterval.current = setInterval(() => {
                    timeLapseVerifier()
                }, 2000);
        }else{
            clearInterval(filteringInterval.current);
            filteringInterval.current = null;
        }

        return(()=>{
            clearInterval(filteringInterval.current);
            filteringInterval.current = null;
        })
    },[timeLapseVerifier, orders, filtered]);



    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <div style={{width: '400px'}}>
                <h3>Bids</h3>
                <OrderBookTable orders={buyOperations} />
            </div>
            <div style={{width: '400px'}}>
                <h3>Ask</h3>
                <OrderBookTable orders={sellOperations} />
            </div>
        </div>
    )
}

export default OrderBook
