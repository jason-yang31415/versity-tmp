export default function (state = {}, action) {
    let cpy = { ...state };
    state[action.key] = action.data;
    return cpy;
}
