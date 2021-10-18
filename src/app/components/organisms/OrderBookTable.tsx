import Table from './Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import StyledTr from '../atoms/TableTr';
import StyledTd from '../atoms/TableTd';
import StyledTh from '../atoms/TableTh';

import IOrder from '../../../entities/Order';

type OrderBookProps = {
    orders?: IOrder[] | undefined,
}

export const TIME_ORDER_EXPIRATION_IN_MINUTES = 1;

const OrderBookTable: React.FC<OrderBookProps> = ({orders}) => {
    return (
        <Table>
        <TableHeader>
            <StyledTh>
                Currency
            </StyledTh>
            <StyledTh>
                Amount
            </StyledTh>
            <StyledTh>
                price
            </StyledTh>
        </TableHeader>

        <TableBody>
        {
            orders && orders?.length > 0 ? 
            (
                orders.map(item => {
                    return(
                        <StyledTr key={`${item.fromAsset}-${item.price}`}>
                            <StyledTd>
                                {item.fromAsset}
                            </StyledTd>
                            <StyledTd>
                                {item.amount}
                            </StyledTd>
                            <StyledTd>
                                {item.price}
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
    )
}

export default OrderBookTable;
