import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import grey from "@material-ui/core/colors/grey";

import "./store/store";
import Navbar from "./components/Navbar";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[900],
        },
    },
});

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Navbar />

                <Switch>
                    <Route path="/">{/* <Home /> */}</Route>
                </Switch>
            </ThemeProvider>
        </Router>
    );
}

export default App;
