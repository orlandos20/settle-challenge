import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './layout';

interface PageProps {
    children?: React.ReactElement | React.ReactElement[],
}

const Page: React.FC<PageProps> = ({children}) => {
    const { t } = useTranslation();
    return (
        <Layout>
            <div className="drawer">
                <h3>Side bar</h3>
            </div>
            <div className="main-container">
                <div className="header">
                    <h1 style={{margin: 0}}>{t('helloWorld')}</h1>
                </div>
                {children}
            </div>
        </Layout>
        
    )
}

export default Page
