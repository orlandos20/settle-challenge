import {useState} from 'react';
// import { useTranslation } from 'react-i18next';
import Page from '../components/templates/Page';
import TokenCard from '../components/molecules/TokenCard';
import OperationModal from '../components/templates/OperationModal';

type Operation = {
    value: number,
    label: string
}

const MainPage: React.FC = ({children}) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalProps, setModalProps] = useState<any>();
    // const { t } = useTranslation();

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

    const openModal = (propsToPass:any) => {
        setModalProps(propsToPass);
        setShowModal(true)
    }
    const closeModal = () => setShowModal(false);

    return (
        <>
        <Page>
            <div style={{display: "flex", justifyContent: "center"}}>
                <h2>hola</h2>
                <div 
                    style={
                        {
                            width: '500px', 
                            display: "flex", 
                            flexDirection: "row", 
                            justifyContent: "space-between", 
                            alignItems: "center",
                            
                        }
                    }
                >
                    {
                        operationTypes.length && operationTypes.map(item => {
                            return(
                                <TokenCard title={item.label} value={""} icon={"test"} width={240} onClick={() => openModal(item)} />
                            )
                        })
                    }
                </div>
            </div>
        </Page>

        <OperationModal onClose={closeModal} show={showModal} modalProps={modalProps}>
            <span> hola</span>
        </OperationModal>
        </>
    )
}

export default MainPage
