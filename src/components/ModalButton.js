import React, { useState } from 'react';
import { Button, Modal } from 'antd';

function ModalButton({
    type,
    buttonText,
    style,
    buttonKey,
    children,
    modalTitle,
    modalDetailMessage,
    onOkHandle,
    onCancelHandle,
}) {
    const [modalVisible, setModalVisible] = useState(false);
    const onClick = () => {
        setModalVisible(true);
    };

    const handleCancel = () => {
        onCancelHandle();
        setModalVisible(false);
    };

    const handleOk = () => {
        onOkHandle();
        setModalVisible(false);
    };
    return (
        <>
            <Button
                type={type}
                onClick={onClick}
                style={{ ...style }}
                key={buttonKey}
            >
                {buttonText}
                {children}
            </Button>
            <Modal
                title={modalTitle}
                visible={modalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>{modalDetailMessage || ''}</p>
            </Modal>
        </>
    );
}

export default ModalButton;
