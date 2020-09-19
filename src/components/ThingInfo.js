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

import ThingList from "./ThingList";

import { search } from "../thunks";

const useStyles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        backgroundColor: "#606160",
        borderRadius: theme.spacing(1),
        boxShadow: "2px 2px 2px #777",
        display: "flex",
        flexDirection: "column",
    },
    rateButton: {
        marginTop: theme.spacing(2),
        alignSelf: "center",
    },
    right: {
        flex: "1 1 auto",
        backgroundColor: "#606160",
        borderRadius: theme.spacing(1),
        boxShadow: "2px 2px 2px #777",
        padding: theme.spacing(2),
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
            },
            rateOpen: false,
        };
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

        return (
            <Container component="main">
                <div className={classes.paper}>
                    <Typography variant="h2">{thing.title}</Typography>
                    <div className={classes.info}>
                        <div className={classes.left}>
                            <div className={classes.thumb}></div>
                            <div className={classes.ratings}>
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
                            </div>
                        </div>

                        <div className={classes.right}>{thing.description}</div>
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
                        />
                        <DialogContentText>Difficulty:</DialogContentText>
                        <Slider
                            defaultValue={0}
                            step={1}
                            min={0}
                            max={10}
                            marks
                            valueLabelDisplay="auto"
                        />
                        <DialogContentText>Clarity:</DialogContentText>
                        <Slider
                            defaultValue={0}
                            step={1}
                            min={0}
                            max={10}
                            marks
                            valueLabelDisplay="auto"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleRateClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleRateClose} color="primary">
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