import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { CardActions, IconButton } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

import Thing from "./Thing";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
    },
}));

export default function ({ item }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Thing item={item} />

            <CardActions disableSpacing>
                <IconButton aria-label="upvote">
                    <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="downvote">
                    <ThumbDownIcon />
                </IconButton>
                <Typography variant="body2" color="textSecondary">
                    5/7 people liked this
                </Typography>
            </CardActions>
        </Card>
    );
}
