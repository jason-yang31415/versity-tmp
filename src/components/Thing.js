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
        <div className={classes.root}>
            <div className={classes.rating}>9</div>
            <div className={classes.thumb}></div>
            <div className={classes.right}>
                <div className={classes.title}>
                    <Typography variant="h5">I'M A TEAPOT</Typography>
                </div>
                <Typography className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer et felis consectetur, cursus dolor sodales, commodo
                    nisi. Donec molestie, massa at ultricies varius, elit diam
                    egestas lacus, vel facilisis nunc purus sit amet nisi. Cras
                    tincidunt, nibh id pharetra consectetur, tortor orci lacinia
                    diam, vitae sodales tellus velit varius risus. Vestibulum
                    sit amet sagittis elit, non convallis augue. Sed ut nisl
                    tellus. Quisque tempus accumsan urna quis semper. Quisque
                    aliquam condimentum luctus. Aenean eu nulla nec urna
                    pulvinar pellentesque non vel lectus. Nullam nec
                    sollicitudin quam. Mauris sed urna risus. Mauris sodales
                    mollis tellus, eu placerat magna luctus vel. Vestibulum
                    mattis ut nisl quis suscipit. Etiam elementum vitae eros id
                    placerat.
                </Typography>
            </div>
        </div>
    );
}

export default Thing;
