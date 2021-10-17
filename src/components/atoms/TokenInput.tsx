import styled from '../../ui-core/styled-components';

const StyledInput = styled.input`
    color: rgb(255, 255, 255);
    width: 0px;
    position: relative;
    font-weight: 500;
    outline: none;
    border: none;
    flex: 1 1 auto;
    background-color: rgb(33, 36, 41);
    font-size: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0px;
    appearance: textfield;
    text-align: right;
`;

type InputProps = {
    value: string,
    onChange?: (e:any) => void | undefined,
    disabled?: boolean | undefined
}

const TokenInput: React.FC<InputProps> = ({value, onChange, disabled}) => {
    const regEx = /^[+]?\d*(?:[.,]\d*)?$/
    return (
        <StyledInput 
            inputMode="decimal" 
            autoComplete="off" 
            autoCorrect="off" 
            type="text" 
            pattern="[+-]?\d+(?:[.,]\d+)?" 
            placeholder="0.0" 
            minLength={1} 
            maxLength={79}
            spellCheck="false"
            onChange={
                (e) => {
                    if(regEx.test(e.target.value) && onChange){
                        onChange(e.target.value)
                    }
                }
            }
            value={value}
            disabled={disabled}
        />
    )
}

export default TokenInput
