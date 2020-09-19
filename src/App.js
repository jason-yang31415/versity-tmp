import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";

import { Typography } from "@material-ui/core";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import grey from "@material-ui/core/colors/grey";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[900],
            contrastText: "#fff",
        },
        secondary: {
            main: grey[100],
            contrastText: "#000",
        },
        type: "dark",
    },
});
function App() {
    return (
        <Router>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Navbar />

                    <Switch>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                    </Switch>
                </ThemeProvider>
            </Provider>
        </Router>
    );
}

export default App;
