import styled from '../../ui-core/styled-components';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const StyledInput = styled(MaskedInput)`
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
    maskOptions?: any
}

const defaultMaskOptions = {
    prefix: '$',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 4, // how many digits allowed after the decimal
    integerLimit: 24, // limit length of integer numbers
    allowNegative: false,
    allowLeadingZeroes: false,
  };

const CustomMaskedInput: React.FC<InputProps> = ({value, onChange, disabled, maskOptions = defaultMaskOptions}) => {
    const regEx = /^[+]?\d*(?:[.,]\d*)?$/
        const currencyMask = createNumberMask({
          ...defaultMaskOptions,
          ...maskOptions,
        })
      
        return(
        <StyledInput 
            mask={currencyMask}
            //  {...inputProps}
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
                    if(regEx.test(e.target.value.replace("$", "")) && onChange){
                        onChange(e.target.value.replace("$", ""))
                    }
                }
            }
            value={value}
            disabled={disabled}
        />
        );

}

export default CustomMaskedInput
