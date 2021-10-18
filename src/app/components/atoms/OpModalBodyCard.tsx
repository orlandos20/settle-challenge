import React from 'react';
import styled from '../../ui-core/styled-components';


const OpCardContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    border-radius: 20px;
    background-color: rgb(44, 47, 54);
    width: initial;
`;

const OpCardContent = styled.div`
    border-radius: 20px;
    border: 1px solid rgb(44, 47, 54);
    background-color: rgb(33, 36, 41);
    width: initial;
    .children-container{
        display: flex;
        flex-flow: row nowrap;
        -webkit-box-align: center;
        align-items: center;
        padding: 1rem 1rem 0.75rem;
    }
`;

const OpCardTitle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

type ModalBodyCardProps = {
    children: React.ReactElement | React.ReactElement[],
    title? : string | undefined,
}



const OpModalBodyCard: React.FC<ModalBodyCardProps> = ({children, title}) => {
    return (
        <>
        {title && <OpCardTitle>{title}</OpCardTitle>}
        <OpCardContainer>
            <OpCardContent>
                <div className="children-container">
                    {children}
                </div>
            </OpCardContent>
        </OpCardContainer>
        </>
    )
}

export default OpModalBodyCard;
