import React from "react";
import { connect } from "react-redux";

import Link from "react-router-dom/Link";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import Badge from "./Badge";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        backgroundColor: "#606160",
        height: theme.spacing(16),
        flexDirection: "row",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
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
    titleText: {
        marginRight: theme.spacing(1),
    },
    title: {
        color: "black",
        display: "flex",
        alignItems: "center",
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
        <Card variant="outlined">
            <CardActionArea component={Link} to={`/things/${item.id}`}>
                <div className={classes.root}>
                    <div className={classes.rating}>{item.rating}</div>
                    <div className={classes.thumb}></div>
                    <div className={classes.right}>
                        <div className={classes.title}>
                            <Typography
                                variant="h5"
                                className={classes.titleText}
                            >
                                {item.title}
                            </Typography>
                            <Badge type={item.type} />
                        </div>
                        <Typography className={classes.description}>
                            {item.description}
                        </Typography>
                    </div>
                </div>
            </CardActionArea>
        </Card>
    );
}

export default Thing;
