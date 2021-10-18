import styled from '../../ui-core/styled-components';

const StyledTr = styled.tr`
    box-sizing: border-box;
    border: 0 solid;
    &:not(caption)>*{
        border-width: 1px 0;
    }
`;

export default StyledTr;