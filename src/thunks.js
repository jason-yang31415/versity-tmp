import { Actions } from "./store/actions";

export function search(s) {
    return (dispatch) => {
        dispatch({
            type: Actions.SEARCH_LIST_SET,
            data: [
                {
                    rating: 9,
                    title: "I'M A TEAPOT",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel sem ac ligula tristique mattis. Proin vitae velit consequat, interdum ipsum eget, fermentum ipsum. Donec nec justo fringilla, tempor tortor sit amet, efficitur elit. Curabitur cursus posuere velit, non vehicula elit pellentesque dignissim. Cras tempor, diam at ullamcorper scelerisque, risus lorem molestie lectus, at cursus elit mi tristique lacus. Morbi euismod libero a sagittis congue. Nunc elit lectus, congue in varius sit amet, mollis vitae leo. Nunc in lorem aliquam, mollis mi at, pulvinar dolor. Proin sit amet porta justo. Nam aliquam consequat mi accumsan euismod. In eget felis mi.",
                    id: "thingone",
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
