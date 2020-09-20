import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        borderRadius: theme.spacing(1),
        border: "1px solid #f0b097",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    text: {
        fontVariant: "small-caps",
        fontSize: theme.spacing(1.5),
        color: "#f0b097",
    },
}));

export default function ({ type }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.text}>{type}</Typography>
        </div>
    );
}
