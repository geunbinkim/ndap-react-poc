import React from 'react';
import { BellFilled, CloseCircleOutlined } from '@ant-design/icons';
import { Badge, Popover } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import ModalButton from './ModalButton';
import { checkNotification } from '../reducers/notification';

function Notification() {
    const contents = useSelector((state) => state.notification);
    const dispatch = useDispatch();
    const pStyle = {
        color: 'black',
    };

    return (
        <Popover
            content={
                <div>
                    {contents.map((content) => (
                        <ModalButton
                            type="link"
                            style={
                                content.isChecked
                                    ? { ...pStyle }
                                    : { ...pStyle, fontWeight: 'bold' }
                            }
                            buttonKey={content.id}
                            buttonText={content.content}
                            modalTitle={content.content}
                            modalDetailMessage={content.detailMessage}
                            onOkHandle={() => {
                                dispatch(checkNotification(content.id));
                            }}
                        >
                            <CloseCircleOutlined
                                style={{ marginLeft: 10, color: 'red' }}
                            />
                        </ModalButton>
                    ))}
                </div>
            }
            title="Notifications"
            trigger="click"
            placement="rightBottom"
        >
            <Badge
                count={contents.filter((content) => !content.isChecked).length}
            >
                <BellFilled
                    style={{
                        fontSize: '23px',
                        color: 'rgba(255, 255, 255, 0.65)',
                        cursor: 'pointer',
                    }}
                />
            </Badge>
        </Popover>
    );
}

export default Notification;
