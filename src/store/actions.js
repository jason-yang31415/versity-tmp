export const Actions = {
    USER_SET: "USER_SET",
};

const actionStateKey = {
    USER_SET: "user",
};

export function createAction(action, data) {
    return {
        key: actionStateKey[action],
        data,
    };
}
