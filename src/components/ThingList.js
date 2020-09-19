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

import Thing from "./Thing";

const useStyles = (theme) => ({
    things: {
        marginTop: theme.spacing(8),
    },
});

class ThingList extends React.Component {
    render() {
        const { classes } = this.props;

        let comps = [];
        for (let th of this.props.things) {
            comps.push(<Thing item={th} />);
        }

        return <div className={classes.things}>{comps}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        things: state.home.things,
    };
};

export default connect(mapStateToProps, null)(withStyles(useStyles)(ThingList));
