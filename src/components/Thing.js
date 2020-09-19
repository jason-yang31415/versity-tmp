import React from "react";
import { connect } from "react-redux";

import Link from "react-router-dom/Link";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1),
        boxShadow: "2px 2px 2px #777",
        backgroundColor: "#606160",
        height: theme.spacing(16),
    },
    rating: {
        width: theme.spacing(10),
        height: "100%",
        color: "#8c8a00",
        marginTop: "auto",
        marginBottom: "auto",
        fontSize: theme.spacing(8),
        fontWeight: "bold",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    thumb: {
        width: theme.spacing(10),
        flexShrink: 0,
        backgroundColor: "red",
        marginLeft: theme.spacing(2),
    },
    right: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(1),
    },
    title: {
        color: "black",
    },
    description: {
        overflowY: "hidden",
    },
}));

// item structure
/*
    {
        title:
        description:
        category:
        rating:
        thumbnaiL:
    }
*/

function Thing({ item }) {
    const classes = useStyles();

    return (
        <Link to={`/things/${item.id}`}>
            <div className={classes.root}>
                <div className={classes.rating}>{item.rating}</div>
                <div className={classes.thumb}></div>
                <div className={classes.right}>
                    <div className={classes.title}>
                        <Typography variant="h5">{item.title}</Typography>
                    </div>
                    <Typography className={classes.description}>
                        {item.description}
                    </Typography>
                </div>
            </div>
        </Link>
    );
}

export default Thing;
