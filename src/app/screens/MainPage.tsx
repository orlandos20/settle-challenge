import {useState, useCallback} from 'react';
import moment from 'moment';
// import { useTranslation } from 'react-i18next';
import Page from '../components/templates/Page';
import TokenCard from '../components/molecules/TokenCard';
import OperationModal from '../components/templates/OperationModal';
import OrderBook from '../components/templates/OrderBook';
import OrderHistory from '../components/templates/OrderHistory';

import {useAppSelector} from '../../adapter/reduxHooks/hooks';

import IOrder from '../../entities/Order';

const MainPage: React.FC = ({children}) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalProps, setModalProps] = useState<any>();
    // const { t } = useTranslation();

    const orders = useAppSelector(state => state.orders.orders);

    const limitOrders = useCallback(()=>{
        return orders.map((order:IOrder) => {
            let orderExecutionTime = moment(order.orderExecutionTime);
            let now = moment();
            if(now.diff(moment(orderExecutionTime, 'DD-MM-YYYY'), 'minutes') < 1 && order.orderType.toLowerCase() === "limit"){
                return order;
            }
            return undefined
        }).filter((elem:IOrder) => elem !== undefined);
    },[orders]) 

    const operationTypes = [
        {
            value: 0,
            label: 'BUY'
        },
        {
            value: 1,
            label: 'SELL'
        }
    ];

    const openModal = (propsToPass:any) => {
        setModalProps(propsToPass);
        setShowModal(true)
    }
    const closeModal = () => setShowModal(false);

    return (
        <>
        <Page>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div 
                    style={
                        {
                            width: '500px', 
                            display: "flex", 
                            flexDirection: "row", 
                            justifyContent: "space-between", 
                        }
                    }
                >
                    {
                        operationTypes.length && operationTypes.map((item,idx) => {
                            return(
                                <TokenCard key={`${item.label}-${idx}`} title={item.label} value={""} icon={"test"} width={240} height={80} onClick={() => openModal(item)} />
                            )
                        })
                    }
                </div>
            </div>
            <OrderBook orders={limitOrders()} />
            <div>
                <OrderHistory orders={orders} />
            </div>
            
        </Page>

        <OperationModal onClose={closeModal} show={showModal} modalProps={modalProps} />
        </>
    )
}

export default MainPage
