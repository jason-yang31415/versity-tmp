export const Actions = {
    USER_SET: "USER_SET",
    SEARCH_LIST_SET: "SEARCH_LIST_SET",
};

export const actionStateKey = {
    USER_SET: "user",
};

export function createAction(action, data) {
    return {
        type: actionStateKey[action],
        data,
    };
}
