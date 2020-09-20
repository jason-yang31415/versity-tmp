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
import Card from "@material-ui/core/Card";
import Slider from "@material-ui/core/Slider";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

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
        flex: "1 1 0",
    },
    searchBar: {
        transition: "width 0.25s",
        width: "50%",
        display: "flex",
    },
    searchBarWide: {
        width: "80%",
    },
    searchButton: {
        transition: "transform 0.25s",
        transform: "rotate(90deg)",
    },
    searchButtonUp: {
        transform: "rotate(-90deg)",
    },
    input: {
        color: "white",
        fontSize: 20,
    },
    things: {
        marginTop: theme.spacing(8),
    },
    advanced: {
        width: "80%",
        backgroundColor: "#737373",
        transition: "max-height 0.25s",
        maxHeight: theme.spacing(50),
        height: "auto",
    },
    hidden: {
        maxHeight: 0,
    },
    advancedOpts: {
        padding: theme.spacing(2),
    },
    filterSelect: {
        width: theme.spacing(30),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
});

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAdvanced: false,
            search: {
                text: "",
                rating: [0, 10],
                difficulty: [0, 10],
                clarity: [0, 10],
                type: "",
                subject: "",
            },
        };
        this.handler = null;
    }

    trySearch = () => {
        if (this.handler) clearTimeout(this.handler);
        this.handler = setTimeout(() => {
            this.props.search(this.state.search);
        }, 1000);
    };

    onSearchChange = (e) => {
        this.setState({
            ...this.state,
            search: {
                ...this.state.search,
                text: e.target.value,
            },
        });

        this.trySearch();
    };

    onSearchFocus = () => {
        this.setState({
            ...this.state,
            showAdvanced: true,
        });
    };

    onSearchBlur = () => {
        this.setState({
            ...this.state,
            showAdvanced: false,
        });
    };

    filterRating = (key, val) => {
        if (
            val[0] === this.state.search[key][0] &&
            val[1] === this.state.search[key][1]
        )
            return;

        this.setState({
            ...this.state,
            search: {
                ...this.state.search,
                [key]: val,
            },
        });

        this.trySearch();
    };

    filterSelect = (key, e) => {
        this.setState({
            ...this.state,
            search: {
                ...this.state.search,
                [key]: e.target.value,
            },
        });

        this.trySearch();
    };

    onKeyDown = (e) => {
        if (e.keyCode === 27) {
            this.onSearchBlur();
        }
    };

    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown);
    }

    render() {
        const { classes } = this.props;

        return (
            <Container component="main">
                <div className={classes.paper}>
                    <div
                        className={`${classes.searchBar} ${
                            this.state.showAdvanced
                                ? classes.searchBarWide
                                : null
                        }`}
                    >
                        <TextField
                            id="standard-basic"
                            label="Find things"
                            variant="filled"
                            className={classes.searchBox}
                            InputProps={{ className: classes.input }}
                            onChange={this.onSearchChange}
                            // onFocus={this.onSearchFocus}
                        />
                        <Button
                            onClick={() => {
                                if (this.state.showAdvanced)
                                    this.onSearchBlur();
                                else this.onSearchFocus();
                            }}
                        >
                            <ArrowForwardIosIcon
                                className={`${classes.searchButton} ${
                                    this.state.showAdvanced
                                        ? classes.searchButtonUp
                                        : null
                                }`}
                            />
                        </Button>
                    </div>

                    <Card
                        elevation={3}
                        className={`${classes.advanced} ${
                            this.state.showAdvanced ? null : classes.hidden
                        }`}
                    >
                        <div className={classes.advancedOpts}>
                            <FormControl
                                variant="outlined"
                                className={classes.filterSelect}
                            >
                                <InputLabel>Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={this.state.search.type}
                                    onChange={(e) =>
                                        this.filterSelect("type", e)
                                    }
                                    label="Type"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"book"}>Book</MenuItem>
                                    <MenuItem value={"notes"}>Notes</MenuItem>
                                    <MenuItem value={"video"}>Video</MenuItem>
                                    <MenuItem value={"course"}>
                                        Online Course
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl
                                variant="outlined"
                                className={classes.filterSelect}
                            >
                                <InputLabel>Subject</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={this.state.search.subject}
                                    onChange={(e) =>
                                        this.filterSelect("subject", e)
                                    }
                                    label="Subject"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"math"}>Math</MenuItem>
                                    <MenuItem value={"cs"}>
                                        Computer Science
                                    </MenuItem>
                                    <MenuItem value={"biology"}>
                                        Biology
                                    </MenuItem>
                                    <MenuItem value={"physics"}>
                                        Physics
                                    </MenuItem>
                                    <MenuItem value={"chemistry"}>
                                        Chemistry
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <Typography>Overall:</Typography>
                            <Slider
                                defaultValue={[0, 10]}
                                onChange={(e, val) =>
                                    this.filterRating("rating", val)
                                }
                                min={0}
                                max={10}
                                step={1}
                                valueLabelDisplay="auto"
                                marks
                            />
                            <Typography>Difficulty:</Typography>
                            <Slider
                                defaultValue={[0, 10]}
                                onChange={(e, val) =>
                                    this.filterRating("difficulty", val)
                                }
                                min={0}
                                max={10}
                                step={1}
                                valueLabelDisplay="auto"
                                marks
                            />
                            <Typography>Clarity:</Typography>
                            <Slider
                                defaultValue={[0, 10]}
                                onChange={(e, val) =>
                                    this.filterRating("clarity", val)
                                }
                                min={0}
                                max={10}
                                step={1}
                                valueLabelDisplay="auto"
                                marks
                            />
                        </div>
                    </Card>
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
        search: (s) => {
            dispatch(search(s));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(useStyles)(Home));
