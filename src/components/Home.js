import React from "react";
import { connect } from "react-redux";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import ThingList from "./ThingList";

import { search } from "../thunks";

const useStyles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    searchBox: {
        width: "50%",
    },
    input: {
        color: "white",
        fontSize: 20,
    },
    things: {
        marginTop: theme.spacing(8),
    },
});

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handler = null;
    }

    onSearchChange = () => {
        if (this.handler) clearTimeout(this.handler);
        this.handler = setTimeout(() => {
            this.props.search();
        }, 1000);
    };

    render() {
        const { classes } = this.props;

        return (
            <Container component="main">
                <div className={classes.paper}>
                    <TextField
                        id="standard-basic"
                        label="Find things"
                        variant="filled"
                        className={classes.searchBox}
                        InputProps={{ className: classes.input }}
                        onChange={this.onSearchChange}
                    />
                </div>
                <ThingList />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        things: state.home.things,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        search: () => {
            dispatch(search());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(useStyles)(Home));
