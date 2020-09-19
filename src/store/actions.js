export const Actions = {};

const actionStateKey = {};

export function createAction(action, data) {
    return {
        key: actionStateKey[action],
        data,
    };
}
