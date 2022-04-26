import React from 'react';
import { Button } from 'antd';

function CreateButton({ text, onClick }) {
    return (
        <Button style={{ float: 'right' }} onClick={onClick}>
            {text}
        </Button>
    );
}

export default CreateButton;
