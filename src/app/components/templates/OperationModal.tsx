import {useState, useEffect} from 'react';
import styled from '../../ui-core/styled-components';
import Modal from '../molecules/Modal';
import OpModalBodyCard from '../atoms/OpModalBodyCard';
import Tabs from '../molecules/Tabs';
import TokenSelect from '../atoms/TokenSelect';
import TokenInput from '../atoms/TokenInput';
import OpModalHeader from '../molecules/OpModalHeader';
import OpModalBody from '../molecules/OpModalBody';
import OpModalFooter from '../molecules/OpModalFooter';
//Interaction layer
import {IgetConversionRate} from '../../interactions/ConversionRateInteactions';
import { IupdateOrders } from '../../interactions/OrdersInteractions';
//Adapter layer
import {useAppDispatch} from '../../../adapter/reduxHooks/hooks';
//Entities layer
import { CurrencyOptions } from '../../../entities/CurrencyOptions';
import CurrencyType from '../../../entities/CurrencyType';
import OrderType from '../../../entities/OrderType';
import orderOptions from '../../../entities/OrderOptions';
import IOrder from '../../../entities/Order';

const ModalContainer = styled.div`
    max-width: 480px;
    min-height: 480px;
    width: 100%;
    background: rgb(25, 27, 31);
    box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
    border-radius: 24px;
    margin-top: 1rem;
`;

const OrderTypeWarning = styled.div`
    position: absolute;
    right: 10%;
    span{
        color: red;
    }
`;

type ModalProps = {
    show: boolean,
    onClose: () => void,
    modalProps: any
}

const OrderTypeModal: React.FC<ModalProps> = ({show, onClose, modalProps}) => {
    const options: CurrencyType[] = CurrencyOptions;
    const [fromAssetAmount, setFromAssetAmount] = useState<string>("");
    const [price, setPrice] = useState<number | undefined>();
    const [toAssetAmount, setToAssetAmount] = useState<number | undefined>();
    const [orderType, setOrderType] = useState<OrderType>(orderOptions[0]);
    const [fromAssetType, setFromAssetType] = useState<CurrencyType>(options[1]);
    const [toAssetType, setToAssetType] = useState<CurrencyType>({value: 0, label: 'ARS'});

    const dispatch = useAppDispatch();
    const tabOptions:OrderType[] = [...orderOptions];

    const fromAssetSelection = (val:CurrencyType) => setFromAssetType(val);
    const toAssetSelection = (val: CurrencyType) => setToAssetType(val);
    const onChangeValue = (val:string) => setFromAssetAmount(val);
    const handleOpSelection = (val:OrderType) => setOrderType(val);

    const onOrderSubmit = () => {
        const order = {
            orderType: orderType.label,
            operationType: modalProps.label,
            currencyPair: `${fromAssetType.label}${toAssetType.label}`,
            orderId: `${fromAssetType.label}-${toAssetType.label}-${toAssetAmount}-${price}-${Math.random().toFixed(2)}`,
            orderExecutionTime: new Date().getTime(),
            amount: toAssetAmount ? toAssetAmount : 0,
            price: price ? price : 0,
            fee: 1.5,
            totalOrderPrice: toAssetAmount ? parseFloat((toAssetAmount - 1.5 / 100).toFixed(4)) : 0,
            fromAsset: fromAssetType.label, 
            toAsset: toAssetType.label
        }
        IupdateOrders(order, dispatch);
        onClose();
    };

    useEffect(()=> {
        //TODO: fix the await for untyped values
        if(fromAssetAmount.length > 0){
            (async () => {
                setTimeout(async () => {
                    const currencyPrice = await IgetConversionRate(fromAssetType, toAssetType, dispatch);
                    let priceParsed = currencyPrice.quote * parseFloat(fromAssetAmount) / 100;
                    priceParsed = parseFloat(priceParsed.toFixed(4));
                    setPrice(parseFloat(currencyPrice.quote.toFixed(4)))
                    setToAssetAmount(priceParsed);
                },2000)
            })()
        }
        else{
            setToAssetAmount(undefined);
        }
    },[fromAssetAmount, dispatch, fromAssetType, toAssetType]);

    return (
        <Modal onClose={onClose} show={show}>
            <ModalContainer>
                <OpModalHeader title={`${orderType.label} Order`}>
                    <span>{modalProps && `${modalProps.label}ING`}</span>
                    <Tabs options={tabOptions} onSelect={handleOpSelection}  />
                </OpModalHeader>
                <OpModalBody>
                    <OpModalBodyCard>
                        <TokenSelect options={options} onSelect={fromAssetSelection} defaultValue={fromAssetType}  />
                        <TokenInput key={"fromAssetAmount"} value={fromAssetAmount ? fromAssetAmount.toString() : ""} onChange={onChangeValue} maskOptions={{ prefix: '', decimalSymbol:"."}} />
                    </OpModalBodyCard>
                    <OpModalBodyCard title={"AT"}>
                        <span style={{color: "#fff"}}>Price</span>
                        <TokenInput 
                            key={"price"} 
                            value={price ? price.toString() : ""} 
                            maskOptions={{ prefix: '$', thousandsSeparatorSymbol:",", decimalSymbol:"."}}
                            disabled 
                        />
                    </OpModalBodyCard>
                    <OpModalBodyCard title={modalProps?.label === "BUY" ? 'USING' : 'RECEIVING'}>
                        <TokenSelect options={[{value: 0, label: 'ARS'}]} onSelect={toAssetSelection} defaultValue={toAssetType}  />
                        <TokenInput 
                            key={"toAssetValue"} 
                            value={toAssetAmount ? toAssetAmount.toString() : ""} 
                            maskOptions={{ prefix: '', thousandsSeparatorSymbol:",", decimalSymbol:"."}}
                            disabled
                        />
                    </OpModalBodyCard>
                </OpModalBody>
                
                {orderType.value === orderOptions[1].value && 
                    (
                        <OrderTypeWarning>
                            <span>Warning: your order would be executed inmediately</span>
                        </OrderTypeWarning>
                    )
                }
                <OpModalFooter buttonTitle={"Place Order"} cb={onOrderSubmit} />
            </ModalContainer>
        </Modal>
    )
}

export default OrderTypeModal
