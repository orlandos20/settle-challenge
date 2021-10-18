import React from 'react';
import { useTranslation } from 'react-i18next';
import {useHistory} from 'react-router-dom';
import Layout from './layout';
import TokenCard from '../molecules/TokenCard';
import StyledDrawer from '../organisms/Drawer';

import {MAIN} from '../../ui-core/utils/routes';

interface PageProps {
    children?: React.ReactElement | React.ReactElement[],
}

const Page: React.FC<PageProps> = ({children}) => {
    const { t } = useTranslation();
    const {replace} = useHistory();
    return (
        <Layout>
            <StyledDrawer>
                <h3>Side bar</h3>
                    <TokenCard
                        title={"dashboard"} 
                        value={""} 
                        icon={"test"} 
                        width={240} 
                        height={80} 
                        onClick={() => replace(`/${MAIN.dashboard}`) } 
                    />
                    {/* <TokenCard
                        title={"profile"} 
                        value={""} 
                        icon={"test"} 
                        width={240} 
                        height={80} 
                        onClick={() => replace(`/${MAIN.profile}`) } 
                    /> */}
            </StyledDrawer>
            <div className="main-container">
                <div className="header">
                    <h1 style={{margin: 0}}>{t('welcome')} {t('to')} {t('settle')}</h1>
                </div>
                {children}
            </div>
        </Layout>
        
    )
}

export default Page
