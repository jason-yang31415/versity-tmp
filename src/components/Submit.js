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
import InputLabel from "@material-ui/core/InputLabel";
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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

export default function Submit() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        type: "",
        subject: "",
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

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LibraryAddIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Submit a new resource
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        required
                        align="left"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="creator"
                        label="Creator"
                        name="creator"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="link"
                        label="Link"
                        name="link"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="thumbnail-url"
                        label="Link to thumbnail"
                        name="thumbnail-url"
                    />
                    <FormControl
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        className={classes.formControl}
                    >
                        <InputLabel htmlFor="outlined-type-native-simple">
                            Content Type
                        </InputLabel>
                        <Select
                            native
                            value={state.type}
                            onChange={handleChange}
                            label="Content Type"
                            inputProps={{
                                name: "type",
                                id: "outlined-type-native-simple",
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={"book"}>Book</option>
                            <option value={"notes"}>Notes</option>
                            <option value={"video"}>Video</option>
                            <option value={"course"}>Online Course</option>
                        </Select>
                    </FormControl>
                    <FormControl
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        className={classes.formControl}
                    >
                        <InputLabel htmlFor="outlined-subject-native-simple">
                            Subject
                        </InputLabel>
                        <Select
                            native
                            value={state.type}
                            onChange={handleChange}
                            label="Subject"
                            inputProps={{
                                name: "subject",
                                id: "outlined-subject-native-simple",
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={"math"}>Math</option>
                            <option value={"cs"}>Computer Science</option>
                            <option value={"biology"}>Biology</option>
                            <option value={"physics"}>Physics</option>
                            <option value={"chemistry"}>Chemistry</option>
                        </Select>
                    </FormControl>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="description"
                        label="Description"
                        name="description"
                        multiline
                        rows={5}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </Container>
    );
}
