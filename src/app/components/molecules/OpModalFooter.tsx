import React from 'react';
import styled from '../../ui-core/styled-components';

const ModalFooter = styled.div`
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    width: 100%;
    display: flex;
    padding: 0px;
    padding-top: 6%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: space-between;
`;

//TODO: fix this any
const ModalFooterButton = styled.button<any>`
    padding: 16px;
    width: 100%;
    text-align: center;
    border-radius: 20px;
    outline: none;
    border: 1px solid transparent;
    text-decoration: none;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    will-change: transform;
    transition: transform 450ms ease 0s;
    transform: perspective(1px) translateZ(0px);
    background-color: rgba(21, 61, 111, 0.44);
    color: rgb(109, 168, 255);
    font-size: 16px;
    font-weight: 500;
    &:hover{
        transform: scale(0.98);
    }
    &:active{
        box-shadow: rgb(17 49 90 / 44%) 0px 0px 0px 1pt;
        background-color: rgba(17, 49, 90, 0.44);
    }
`;

type OpMOdalFooterProps = {
    buttonTitle: string,
    cb: void | (() => void | any)
}

const OpModalFooter: React.FC<OpMOdalFooterProps> = ({buttonTitle, cb}) => {
    return (
        <ModalFooter>
            <ModalFooterButton onClick={cb}>
                {buttonTitle}
            </ModalFooterButton>
        </ModalFooter>
    )
}

export default OpModalFooter
