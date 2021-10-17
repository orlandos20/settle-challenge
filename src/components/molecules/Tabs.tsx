import {useState} from 'react';
import styled from '../../ui-core/styled-components';
import Tab from '../atoms/Tab';

const TabsContainer = styled.div`
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    display: flex;
    padding: 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    width: fit-content;
    font-weight: 500;
    font-size: 16px;
`;

const TabsContent = styled.div`
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    width: 100%;
    padding: 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    justify-self: flex-end;
    background-color: rgb(25, 27, 31);
    border-radius: 16px;
    display: grid;
    grid-auto-flow: column;
    overflow: auto;  
`;

type TabsProps = {
    options: Array<{
        value: number,
        label: string,
    }>,
    onSelect: (val:any) => any | void
}

const Tabs: React.FC<TabsProps> = ({options, onSelect}) => {

    const [idxSelected, setIdxSelected] = useState(0);

    const handleOptionSelected: any = (optionSelected:{value: number, label:string}, idx:number) => {
        setIdxSelected(idx);
        onSelect(optionSelected);
    };

    return (
        <TabsContainer>
            <TabsContent>
                {
                    options.length && options.map( (tabOption, idx) => {
                        return(
                            <Tab 
                                isActive={idx === idxSelected} 
                                label={tabOption.label} 
                                onClick={() => handleOptionSelected(tabOption, idx)} 
                                key={`${tabOption.label}${idx}`}                            
                            />
                        )
                    })
                }

                {/* <Tab>
                    <div>
                        <span className="active">Sell</span>
                    </div>
                </Tab>
                <Tab>
                    <div>
                        <span>Buy</span>
                    </div>
                </Tab> */}
            </TabsContent>
        </TabsContainer>
    )
}

export default Tabs
