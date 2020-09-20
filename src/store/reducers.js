import { Actions, actionStateKey } from "./actions";

export default function (state = {}, action) {
    if (actionStateKey.hasOwnProperty(action.type)) {
        let cpy = { ...state };
        cpy[actionStateKey[action.type]] = action.data;
        return cpy;
    }
    if (action.type === Actions.SEARCH_LIST_SET) {
        let cpy = { ...state };
        cpy.home = {
            things: action.data,
        };
        return cpy;
    }
    return state;
}
