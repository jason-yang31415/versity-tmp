import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";

import { Typography } from "@material-ui/core";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import grey from "@material-ui/core/colors/grey";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
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
                    <CssBaseline />

                    <Navbar />

                    <Switch>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/">
                            <Home></Home>
                        </Route>
                    </Switch>
                </ThemeProvider>
            </Provider>
        </Router>
    );
}

export default App;
