import React from 'react';
import styled from '../../ui-core/styled-components';

const ModalBody = styled.div`
    position: relative;
    padding: 8px;
    display: grid;
    grid-auto-rows: auto;
    row-gap: 12px;
`;

type ModalBodyProp = {
    children: React.ReactElement | React.ReactElement[]
}

const OpModalBody: React.FC<ModalBodyProp> = ({children}) => {
    return (
        <ModalBody>
            {children}
        </ModalBody>
    )
}

export default OpModalBody
