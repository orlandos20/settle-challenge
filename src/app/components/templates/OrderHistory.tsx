import React from 'react';
import Table from '../organisms/Table';
import TableHeader from '../organisms/TableHeader';
import TableBody from '../organisms/TableBody';
import StyledTr from '../atoms/TableTr';
import StyledTd from '../atoms/TableTd';
import StyledTh from '../atoms/TableTh';

import IOrder from '../../../entities/Order';


type OrderBookProps = {
    orders: IOrder[]
};

export const OrderHistory: React.FC<OrderBookProps> = ({orders}) => {
    return (
        <>
        <h3>Order History</h3>
            <Table>
            <TableHeader>
                <StyledTh>
                    Currency
                </StyledTh>
                <StyledTh>
                    Operation
                </StyledTh>
                <StyledTh>
                    Order Type
                </StyledTh>
                <StyledTh>
                    Price
                </StyledTh>
                <StyledTh>
                    total order
                </StyledTh>
            </TableHeader>
    
            <TableBody>
            {
                orders?.length > 0 ? 
                (
                    orders.map((item,idx) => {
                        return(
                            <StyledTr key={`${item.price}-${idx}`}>
                                <StyledTd>
                                    {item.fromAsset}
                                </StyledTd>
                                <StyledTd>
                                    {item.operationType}
                                </StyledTd>
                                <StyledTd>
                                    {item.orderType}
                                </StyledTd>
                                <StyledTd>
                                    {item.price}
                                </StyledTd>
                                <StyledTd>
                                    {item.totalOrderPrice}
                                </StyledTd>
                            </StyledTr>
                        )
                    })
                )
                :
                null
            }
            </TableBody>
        </Table>
        </>
    )
};

export default OrderHistory;
