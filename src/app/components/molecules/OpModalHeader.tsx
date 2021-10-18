import React from 'react';
import styled from '../../ui-core/styled-components';

const ModalHeader = styled.div`
    padding: 1rem 1.25rem 0.5rem;
    width: 100%;
    color: rgb(195, 197, 203);
    box-sizing: border-box;
    .header-content{
        box-sizing: border-box;
        margin: 0px;
        min-width: 0px;
        width: 100%;
        display: flex;
        padding: 0px;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        .current-order-type{
            box-sizing: border-box;
            margin: 0px;
            min-width: 0px;
            display: flex;
            padding: 0px;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: start;
            justify-content: flex-start;
            width: fit-content;
            font-weight: 500;
            font-size: 16px;
        }
    }
`;

type OpModalHeaderProps = {
    children: React.ReactElement | React.ReactElement[],
    title: string,
}

const OpModalHeader: React.FC<OpModalHeaderProps> = ({children, title}) => {
    return (
        <ModalHeader>
            <div className="header-content">
                <div className="current-order-type">{title}</div>
                {/* <Tabs /> */} 
                {children} 
            </div>
        </ModalHeader>
    )
}

export default OpModalHeader
