import React from 'react';
import styled from '../../ui-core/styled-components';
import Card from '../atoms/Card';

const CardContentLayout = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
`;

const LeftSideCardContent = styled.div`
    box-sizing: border-box;
    margin: 0px;
    flex-direction: row;
    flex-basis: 66.6667%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 66.6667%;
    .token-title{
       ${({ theme: { colors } }) => ` color: ${colors.lightGray};`}
       margin: 0px;
       font-size: 0.875rem;
       font-weight: 700;
       line-height: 1.5;
       text-transform: uppercase;
       letter-spacing: 0.02857em;
    }
    .token-value{
        font-weight: 700;
        margin: 0px;
        font-size: 1.25rem;
        line-height: 1.375;
        ${({ theme: { colors } }) => ` color: ${colors.darkGray};`}
        font-weight: 500;
        letter-spacing: 0em;
    }
`;

const RightSideCardContent = styled.div`
    box-sizing: border-box;
    margin: 0px;
    flex-direction: row;
    flex-basis: 33.3333%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    max-width: 33.3333%;
    .icon-container{
        width: 3rem;
        height: 3rem;
        margin-left: auto;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        opacity: 1;
        background-color: rgb(23, 193, 232);
        color: rgb(255, 255, 255);
        border-radius: 0.5rem;
    }
`

type TokenCardProps = {
    title: string,
    value: string,
    icon: any,
    width?: number | undefined,
    onClick?: (() => any | void) | undefined 
}

const TokenCard: React.FC<TokenCardProps> = ({title, value, icon, width, onClick}) => {
    return (
        <Card width={width ? width : undefined} onClick={onClick}>
            <CardContentLayout>
                <LeftSideCardContent>
                    <span className="token-title">{title}</span>
                    <h5 className="token-value">{value}</h5>
                </LeftSideCardContent>
                <RightSideCardContent>
                    <div className="icon-container">
                        icon
                    </div>
                </RightSideCardContent>
            </CardContentLayout>
        </Card>
    )
}

export default TokenCard
