const initialState = [
    // {
    //     id: 1,
    //     content: '',
    //     isChecked: false,
    // },
];

const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
const CHECK_NOTIFICATION = 'CHECK_NOTIFICATION';

const id = 0;
export const addNotification = (notification) => ({
    type: ADD_NOTIFICATION,
    content: {
        ...notification,
        id: id + 1,
        isChecked: false,
    },
});

export const removeNotification = (notificationId) => ({
    type: REMOVE_NOTIFICATION,
    notificationId,
});

export const checkNotification = (notificationId) => ({
    type: CHECK_NOTIFICATION,
    notificationId,
});

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return state.concat({
                ...action.content,
            });
        case REMOVE_NOTIFICATION:
            return state.filter(
                (notification) => notification.id === action.notificationId,
            );
        case CHECK_NOTIFICATION:
            return state.map((notification) =>
                notification.id === action.notificationId
                    ? { ...notification, isChecked: true }
                    : notification,
            );
        default:
            return state;
    }
}
