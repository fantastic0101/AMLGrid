import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const CustomSelect = ({ className, options, defaultValue }) => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const renderLabel = (option) => (
        <div className="flex items-center p-2">
            <img src={option.image} alt={option.label1} className="w-5 h-5 mr-2" />
            {option.label1 + " " + option.label2}
        </div>
    );

    return (
        <Select
            className={className}
            placeholder="Select a fruit"
            onChange={handleChange}
            dropdownRender={(menu) => (
                <div>
                    {menu}
                </div>
            )}
            defaultValue={defaultValue}
        >
            {options.map((option) => (
                <Option key={option.value} value={option.value} label={renderLabel(option)}>
                    {renderLabel(option)}
                </Option>
            ))}
        </Select>
    );
};

export default CustomSelect;