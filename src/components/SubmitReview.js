import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import CreateIcon from '@material-ui/icons/Create';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    formControl: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    labelStyle: {
        color: "#fff",
    },
}));

export default function SubmitReview({ match: { params } }) {
    const classes = useStyles();
    const history = useHistory();

    const [state, setState] = React.useState({
        type: "",
        subject: "",
        audience: "",
    });

    const handleChange = (event) => {
        const name = event.target.name;
        console.log(event.target.name);
        console.log(event.target.value);
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const submitClick = () => {
        history.push(`/things/${params.thingId}`);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <CreateIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Submit a new review
                </Typography>

                <Typography style={{marginTop:"1em"}}>Overall:</Typography>
                <Slider
                    defaultValue={0}
                    min={0}
                    max={10}
                    step={1}
                    valueLabelDisplay="auto"
                    marks
                />
                <Typography>Difficulty:</Typography>
                <Slider
                    defaultValue={0}
                    min={0}
                    max={10}
                    step={1}
                    valueLabelDisplay="auto"
                    marks
                />
                <Typography>Clarity:</Typography>
                <Slider
                    defaultValue={0}
                    min={0}
                    max={10}
                    step={1}
                    valueLabelDisplay="auto"
                    marks
                />
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="review"
                        label="Review"
                        name="review"
                        multiline
                        rows={8}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={submitClick}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </Container>
    );
}
