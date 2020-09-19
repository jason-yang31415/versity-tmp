import { Actions } from "./store/actions";

export function search(s) {
    return (dispatch) => {
        dispatch({
            type: Actions.SEARCH_LIST_SET,
            data: [
                {
                    rating: 9,
                    title: "asfasdf",
                },
            ],
        });
        fetch("http://localhost:9000/search", {
            method: "POST",
            body: JSON.stringify(s),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {});
    };
}
