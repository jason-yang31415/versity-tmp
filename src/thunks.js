import { Actions, createAction } from "./store/actions";

export function search(s) {
    return (dispatch) => {
        console.log(s);
        dispatch({
            type: Actions.SEARCH_LIST_SET,
            data: [
                {
                    rating: 9,
                    title: "I'M A TEAPOT",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel sem ac ligula tristique mattis. Proin vitae velit consequat, interdum ipsum eget, fermentum ipsum. Donec nec justo fringilla, tempor tortor sit amet, efficitur elit. Curabitur cursus posuere velit, non vehicula elit pellentesque dignissim. Cras tempor, diam at ullamcorper scelerisque, risus lorem molestie lectus, at cursus elit mi tristique lacus. Morbi euismod libero a sagittis congue. Nunc elit lectus, congue in varius sit amet, mollis vitae leo. Nunc in lorem aliquam, mollis mi at, pulvinar dolor. Proin sit amet porta justo. Nam aliquam consequat mi accumsan euismod. In eget felis mi.",
                    id: "thingone",
                    type: "textbook",
                    thumbnail:
                        "https://images-na.ssl-images-amazon.com/images/I/5154dNR4SJL._SX363_BO1,204,203,200_.jpg",
                },
                {
                    rating: 9,
                    title: "I'M A TEAPOT",
                    description:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel sem ac ligula tristique mattis. Proin vitae velit consequat, interdum ipsum eget, fermentum ipsum. Donec nec justo fringilla, tempor tortor sit amet, efficitur elit. Curabitur cursus posuere velit, non vehicula elit pellentesque dignissim. Cras tempor, diam at ullamcorper scelerisque, risus lorem molestie lectus, at cursus elit mi tristique lacus. Morbi euismod libero a sagittis congue. Nunc elit lectus, congue in varius sit amet, mollis vitae leo. Nunc in lorem aliquam, mollis mi at, pulvinar dolor. Proin sit amet porta justo. Nam aliquam consequat mi accumsan euismod. In eget felis mi.",
                    id: "thingone",
                    type: "textbook",
                    thumbnail:
                        "https://images-na.ssl-images-amazon.com/images/I/5154dNR4SJL._SX363_BO1,204,203,200_.jpg",
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

export function signIn(username) {
    return (dispatch) => {
        dispatch(createAction(Actions.USER_SET, username));
    };
}

export function signOut() {
    return (dispatch) => {
        dispatch(createAction(Actions.USER_SET, null));
    };
}

export function sendRating(rating) {
    console.log(rating);
    fetch("http://localhost:9000/rate", {
        method: "POST",
        body: JSON.stringify(rating),
    });
}

export function getThingInfo(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                rating: 9,
                ratings: {
                    difficulty: 10,
                    clarity: 2,
                },
                title: "UR A TEAPOT",
                description: "The authoritative textbook on who is a teapot.",
                id: "thingone",
                type: "textbook",
                subject: "biology",
                targetAudience: "k-5",
                thumbnail:
                    "https://images-na.ssl-images-amazon.com/images/I/5154dNR4SJL._SX363_BO1,204,203,200_.jpg",
                recommendations: [
                    {
                        rating: 9,
                        title: "I'M A TEAPOT",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel sem ac ligula tristique mattis. Proin vitae velit consequat, interdum ipsum eget, fermentum ipsum. Donec nec justo fringilla, tempor tortor sit amet, efficitur elit. Curabitur cursus posuere velit, non vehicula elit pellentesque dignissim. Cras tempor, diam at ullamcorper scelerisque, risus lorem molestie lectus, at cursus elit mi tristique lacus. Morbi euismod libero a sagittis congue. Nunc elit lectus, congue in varius sit amet, mollis vitae leo. Nunc in lorem aliquam, mollis mi at, pulvinar dolor. Proin sit amet porta justo. Nam aliquam consequat mi accumsan euismod. In eget felis mi.",
                        id: "thingone",
                        type: "textbook",
                        thumbnail:
                            "https://images-na.ssl-images-amazon.com/images/I/5154dNR4SJL._SX363_BO1,204,203,200_.jpg",
                    },
                    {
                        rating: 9,
                        title: "I'M A TEAPOT",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel sem ac ligula tristique mattis. Proin vitae velit consequat, interdum ipsum eget, fermentum ipsum. Donec nec justo fringilla, tempor tortor sit amet, efficitur elit. Curabitur cursus posuere velit, non vehicula elit pellentesque dignissim. Cras tempor, diam at ullamcorper scelerisque, risus lorem molestie lectus, at cursus elit mi tristique lacus. Morbi euismod libero a sagittis congue. Nunc elit lectus, congue in varius sit amet, mollis vitae leo. Nunc in lorem aliquam, mollis mi at, pulvinar dolor. Proin sit amet porta justo. Nam aliquam consequat mi accumsan euismod. In eget felis mi.",
                        id: "thingone",
                        type: "textbook",
                        thumbnail:
                            "https://images-na.ssl-images-amazon.com/images/I/5154dNR4SJL._SX363_BO1,204,203,200_.jpg",
                    },
                ],
            });
        }, 500);
    });
}

export function submitNewResource(res) {
    console.log(res);
    fetch("http://localhost:9000/submit", {
        method: "POST",
        body: JSON.stringify(res),
    });
}
