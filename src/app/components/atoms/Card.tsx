import React from 'react'
import styled from '../../ui-core/styled-components';

type CardProps = {
    children: React.ReactElement | React.ReactElement[],
    width?: number | undefined,
    onClick?: (() => any | void) | undefined 
}

const CardContainer = styled.div<CardProps>`
    ${({ width }) => width ? `width: ${width}px;` : ''}
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 0px;
    overflow-wrap: break-word;
    background-color: rgb(255, 255, 255);
    background-clip: border-box;
    border: 0px solid rgba(0, 0, 0, 0.125);
    border-radius: 1rem;
    box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
`

const CardInset = styled.div`
    background-image: none;
    opacity: 1;
    background-color: rgb(255, 255, 255);
    color: rgb(52, 71, 103);
    margin: 0px;
    padding: 0px;
`
const CardContent = styled.div`
    opacity: 1;
    background-color: transparent;
    color: rgb(52, 71, 103);
    padding: 16px;
`

const Card: React.FC<CardProps> = ({children, width, onClick}) => {
    return (
        <CardContainer width={width ? width : undefined} onClick={onClick}>
            <CardInset>
                <CardContent>
                    {children}
                </CardContent>
            </CardInset>
        </CardContainer>
    )
}

export default Card
