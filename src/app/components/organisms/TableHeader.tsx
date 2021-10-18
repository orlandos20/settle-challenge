import React from 'react';
import StyledThead from '../atoms/TableThead';
import StyledTr from '../atoms/TableTr';

type TableHeaderProps ={
    children: React.ReactElement | React.ReactElement[]
}

const TableHeader:React.FC<TableHeaderProps> = ({children}) => {
    return (
         <StyledThead>
            <StyledTr>
                {children}
            </StyledTr>
        </StyledThead>
    )
};

export default TableHeader
