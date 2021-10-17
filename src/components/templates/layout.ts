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
        background-color: blue;
        height: 100vh;
    }
    .main-container {
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
        background-color: red;
    }
    
`;

export default Layout;
