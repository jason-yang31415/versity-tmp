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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slider from "@material-ui/core/Slider";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Review from "./Review";
import AddIcon from "@material-ui/icons/Add";

import ThingList from "./ThingList";
import Badge from "./Badge";

import { search, sendRating } from "../thunks";

const useStyles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: theme.spacing(12),
    },
    info: {
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    left: {
        width: theme.spacing(30),
        marginRight: theme.spacing(5),
        flex: "0 0 auto",
    },
    thumb: {
        height: theme.spacing(40),
        backgroundColor: "blue",
    },
    ratings: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
    },
    rateButton: {
        marginTop: theme.spacing(2),
        alignSelf: "center",
    },
    right: {
        flex: "1 1 auto",
        display: "flex",
        flexDirection: "column",
    },
    badges: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(1),
    },
    description: {
        padding: theme.spacing(2),
    },
    review: {
        display: "flex",
    },
});

class ThingInfo extends React.Component {
    constructor(props) {
        super(props);
        const {
            match: { params },
        } = this.props;

        this.state = {
            thing: {
                rating: 9,
                ratings: {
                    difficulty: 10,
                    clarity: 2,
                },
                title: "UR A TEAPOT",
                description: "The authoritative textbook on who is a teapot.",
                id: "thingone",
                type: "textbook",
                subject: "biology",
                targetAudience: "k-5",
            },
            rateOpen: false,
            rating: {
                rating: 0,
                difficulty: 0,
                clarity: 0,
            },
        };
    }

    sendRating() {
        sendRating({
            id: this.state.thing.id,
            rating: this.state.rating.rating,
            difficulty: this.state.rating.difficulty,
            clarity: this.state.rating.clarity,
        });
    }

    setRating(key, r) {
        this.setState({
            ...this.state,
            rating: {
                ...this.state.rating,
                [key]: r,
            },
        });
    }

    render() {
        if (!this.state.thing) return <></>;

        const { classes } = this.props;
        const thing = this.state.thing;

        const handleRateOpen = () => {
            this.setState({
                rateOpen: true,
            });
        };
        const handleRateClose = () => {
            this.setState({
                rateOpen: false,
            });
        };
        const sendRatingClick = () => {
            this.sendRating();
            handleRateClose();
        };

        return (
            <Container component="main">
                <div className={classes.paper}>
                    <Typography variant="h2">{thing.title}</Typography>
                    <div className={classes.info}>
                        <div className={classes.left}>
                            <div className={classes.thumb}></div>
                            <Paper elevation={3} className={classes.ratings}>
                                <Typography variant="h5">
                                    Overall: {thing.rating}
                                </Typography>
                                <Typography>
                                    Difficulty: {thing.ratings.difficulty}/10
                                </Typography>
                                <Typography>
                                    Clarity: {thing.ratings.clarity}/10
                                </Typography>
                                <Button
                                    className={classes.rateButton}
                                    color="primary"
                                    variant="outlined"
                                    onClick={handleRateOpen}
                                >
                                    RATE
                                </Button>
                            </Paper>
                        </div>

                        <div className={classes.right}>
                            <div className={classes.badges}>
                                <Badge type={thing.type} />
                                <Badge type={thing.subject} />
                                <Badge type={thing.targetAudience} />
                            </div>

                            <Box pb={2}>
                                <Paper
                                    elevation={3}
                                    className={classes.description}
                                >
                                    {thing.description}
                                </Paper>
                            </Box>
                            <div>
                                <div className={classes.review}>
                                    <Typography
                                        variant="h5"
                                        style={{ flexGrow: 1 }}
                                    >
                                        Reviews
                                    </Typography>
                                    <IconButton aria-label="settings">
                                        <AddIcon />
                                    </IconButton>
                                </div>

                                <Review />
                                <Review />
                                <Review />
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog open={this.state.rateOpen} onClose={handleRateClose}>
                    <DialogTitle>Add your rating</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Overall:</DialogContentText>
                        <Slider
                            defaultValue={0}
                            step={1}
                            min={0}
                            max={10}
                            marks
                            valueLabelDisplay="auto"
                            onChange={(e, val) => this.setRating("rating", val)}
                        />
                        <DialogContentText>Difficulty:</DialogContentText>
                        <Slider
                            defaultValue={0}
                            step={1}
                            min={0}
                            max={10}
                            marks
                            valueLabelDisplay="auto"
                            onChange={(e, val) =>
                                this.setRating("difficulty", val)
                            }
                        />
                        <DialogContentText>Clarity:</DialogContentText>
                        <Slider
                            defaultValue={0}
                            step={1}
                            min={0}
                            max={10}
                            marks
                            valueLabelDisplay="auto"
                            onChange={(e, val) =>
                                this.setRating("clarity", val)
                            }
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleRateClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={sendRatingClick} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
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

export default connect(null, null)(withStyles(useStyles)(ThingInfo));
