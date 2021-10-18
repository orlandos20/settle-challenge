import React from 'react';
import styled from '../../ui-core/styled-components';

const StyledTable = styled.table`
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    vertical-align: top;
    border-color: #dee2e6;
    &>:not(caption)>*>*{
        padding: .5rem;
        background-color: transparent;
        border-bottom-width: 1px;
        box-shadow: inset 0 0 0 9999px transparent;
    }
    .table-bordered>:not(caption)>*>*{
        border-width: 0 1px;
    }
`;

type TableProps ={
    children: React.ReactElement | React.ReactElement[]
}

const Table: React.FC<TableProps> = ({children}) => {
    return (
        <StyledTable>
            {children}
        </StyledTable>
    )
}

export default Table
