import React from 'react';
import { Input } from 'antd';

function SearchInput({ placeholder, onSearch }) {
    return (
        <div style={{ display: 'inline-block' }}>
            <Input
                placeholder={placeholder}
                onChange={(e) => {
                    onSearch(e.target.value);
                }}
                style={{ width: '460px', display: 'block' }}
            />
        </div>
    );
}

export default SearchInput;
