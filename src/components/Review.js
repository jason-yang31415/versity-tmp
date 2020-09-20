import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Review() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Box pt={1}>
            <Paper m="2rem" elevation={3}>
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar
                                aria-label="recipe"
                                className={classes.avatar}
                            >
                                RJ
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="This is so bad"
                        subheader="
                        Overall: 5/10,
                        Difficulty: 8/10,
                        Clarity: 1/10
                        "
                    />
                    <Box mt="-1em" mb="-2em">
                        <CardContent>
                            <Typography
                                variant="body1"
                                color=""
                                component="h"
                                mb="1em"
                            ></Typography>

                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                This book is really bad and super boring. I do
                                not like algorithms. This book is really bad and
                                super boring. I do not like algorithms. This
                                book is really bad and super boring. I do not
                                like algorithms. This book is really bad and
                                super boring. I do not like algorithms. This
                                book is really bad and super boring. I do not
                                like algorithms. This book is really bad and
                                super boring. I do not like algorithms. This
                                book is really bad and super boring. I do not
                                like algorithms. This book is really bad and
                                super boring. I do not like algorithms. This
                                book is really bad and super boring. I do not
                                like algorithms. This book is really bad and
                                super boring. I do not like algorithms. This
                                book is really bad and super boring. I do not
                                like algorithms. This book is really bad and
                                super boring. I do not like algorithms. This
                                book is really bad and super boring. I do not
                                like algorithms.
                            </Typography>
                        </CardContent>
                    </Box>
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
            </Paper>
        </Box>
    );
}