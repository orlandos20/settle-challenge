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
    children: React.ReactElement | React.ReactElement,
    modalProps: any
}

type CurrencyType = {
    value: string,
    label: string
}

const options: CurrencyType[] = [
    {
        value: '0',
        label: 'ARS'
    },
    {
        value: '1',
        label: 'BTC'
    },
    {
        value: '2',
        label: 'ETH'
    },
    {
        value: '3',
        label: 'USDC'
    },
];

type Operation = {
    value: number, 
    label: string
}
const orderTypes = [
    {
        value: 0,
        label: "Limit"
    },
    {
        value: 1,
        label: "Market"
    }
]

const OperationModal: React.FC<ModalProps> = ({show, onClose, children, modalProps}) => {

    const [fromAssetAmount, setFromAssetAmount] = useState<number | undefined>();
    const [price, setPrice] = useState<number | undefined>();
    const [toAssetAmount, setToAssetAmount] = useState<number | undefined>();
    const [orderType, setOrderType] = useState<Operation>(orderTypes[0]);
    const [fromAssetType, setFromAssetType] = useState<CurrencyType>(options[0]);
    const [toAssetType, setToAssetType] = useState<CurrencyType>(options[2]);

    const tabOptions:Operation[] = [...orderTypes];

    const fromAssetSelection = (val:CurrencyType) => setFromAssetType(val);
    const toAssetSelection = (val: CurrencyType) => setToAssetType(val);
    const onChangeValue = (val:string) => setFromAssetAmount(parseInt(val));
    const handleOpSelection = (val:Operation) => setOrderType(val);

    const handleCurrentPrice = () => {
        // setPrice()
    }

    useEffect(()=> {
        //Just a test
        // Call the rates/quote endpoints here based on selected assets
        if(fromAssetAmount){
            setToAssetAmount(fromAssetAmount - 1.5/100);
        }
        else{
            setToAssetAmount(undefined);
        }
    },[fromAssetAmount]);

    console.log("modalProps  --> ", modalProps);
    
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
                        <TokenInput value={fromAssetAmount ? fromAssetAmount.toString() : ""} onChange={onChangeValue} />
                    </OpModalBodyCard>
                    <OpModalBodyCard title={"AT"}>
                        <span style={{color: "#fff"}}>Price</span>
                        <TokenInput value={price ? price.toString() : ""} disabled />
                    </OpModalBodyCard>
                    <OpModalBodyCard title={"USING"}>
                        <TokenSelect options={options} onSelect={toAssetSelection} defaultValue={toAssetType} />
                        <TokenInput value={toAssetAmount ? toAssetAmount.toString() : ""} />
                    </OpModalBodyCard>
                </OpModalBody>
                
                {orderType.value === orderTypes[1].value && 
                    (
                        <OrderTypeWarning>
                            <span>Warning: your order would be executed inmediately</span>
                        </OrderTypeWarning>
                    )
                }
                <OpModalFooter buttonTitle={"Place Order"} cb={console.log("click in place order")} />
            </ModalContainer>
        </Modal>
    )
}

export default OperationModal
