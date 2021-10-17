import React from 'react';
import styled from '../../ui-core/styled-components';

type ModalProps = {
    show: boolean,
    onClose: () => void,
    children: React.ReactElement | React.ReactElement
}

type StyledModalProps = {
    onClick: any
}

const ModalContainer = styled.div<StyledModalProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalContent = styled.div`
    position:fixed;
    width: 480px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Modal: React.FC<ModalProps> = ({show, onClose, children}) => {

    if(!show){
        return null;
    }

    return (
        <ModalContainer onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                {children}
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal
