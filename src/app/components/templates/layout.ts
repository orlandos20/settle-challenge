import styled from '../../ui-core/styled-components';

const Layout = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    ${({ theme: { colors } }) => `background-color: ${colors.bg};`}
    display: grid;
    grid-template-columns: 0.3fr 1.6fr;
    grid-template-rows: 1fr;
    gap: 0 0;
    grid-template-areas: 
    "drawer main-container";

    .drawer {
        grid-area: drawer;
        height: 100vh;
        color: rgba(0,0,0,0.87);
        -webkit-transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
        transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
        overflow: hidden;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
        min-width: 0px;
        overflow-wrap: break-word;
        background-color: rgb(255,255,255);
        background-clip: border-box;
        border: 0px solid rgba(0,0,0,0.125);
        border-radius: 1rem;
        box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
    }
    .main-container {
        margin-bottom: 5%;
        overflow-y: scroll;
        display: grid; 
        grid-template-columns: 1fr; 
        grid-template-rows: 0.3fr 1.6fr; 
        gap: 0 0; 
        grid-template-areas: 
          "header"
          "."; 
        grid-area: main-container;
    }
    .header {
        grid-area: header;
        height: 100px;
        color: rgba(0,0,0,0.87);
        -webkit-transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
        transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
        overflow: hidden;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
        min-width: 0px;
        overflow-wrap: break-word;
        ${({ theme: { colors } }) => `background-color: ${colors.bg};`}
        background-clip: border-box;
        border: 0px solid rgba(0,0,0,0.125);
        border-radius: 1rem;
        box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
        margin-bottom: 5%;
    }
`;

export default Layout;
