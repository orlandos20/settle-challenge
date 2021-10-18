import React from 'react';
import Select from 'react-select';

type SelectOption = {
    value: number,
    label: string,
}

type SelectProps = {
    options: Array<SelectOption>,
    defaultValue: SelectOption,
    onSelect: (val:any) => void
}

const TokenSelect: React.FC<SelectProps> = ({options, defaultValue, onSelect}) => {
    // const onChange = (option: typeof Option | null) => {
    //     onSelect(option)
    //  }

    return (
        <Select options={options} onChange={onSelect} defaultValue={defaultValue}  />
    )
}

export default TokenSelect
