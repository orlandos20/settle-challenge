import React from 'react';
import styled from '../../ui-core/styled-components';

//TODO: fix this any
const StyledTab = styled.div<any>`
    width: 100%;
    color: rgb(195, 197, 203);
    box-sizing: border-box;
    cursor: pointer;
    div{
        box-sizing: border-box;
        margin: 0px;
        min-width: 0px;
        font-weight: 500;
        font-size: 16px;
        .active{
            display: flex;
            flex-flow: row nowrap;
            outline: none;
            cursor: pointer;
            text-decoration: none;
            font-size: 1rem;
            width: fit-content;
            padding: 8px 12px;
            border-radius: 12px;
            font-weight: 600;
            color: rgb(255, 255, 255);
            background-color: rgb(44, 47, 54);
        }
    }
`;

type TabProps = {
    isActive?: boolean | undefined,
    label: string,
    onClick: void | (()=> any | void)
}
const Tab: React.FC<TabProps> = ({isActive, label, onClick}) => {
    return (
        <StyledTab onClick={onClick}>
            <div>
                <span className={isActive ? 'active' : ''}>{label}</span>
            </div>
        </StyledTab>
    )
}

export default Tab
