import React from 'react';
import StyledTbody from '../atoms/TableTbody';

type TableBodyProps ={
    children: React.ReactElement | React.ReactElement[] | null
}

const TableBody: React.FC<TableBodyProps> = ({children}) => {
    return (
    <StyledTbody>
        {children}
    </StyledTbody>
    )
}

export default TableBody
