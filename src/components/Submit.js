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
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

import { submitNewResource } from "../thunks";

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
    const history = useHistory();

    const [state, setState] = React.useState({
        title: "",
        type: "",
        subject: "",
        targetAudience: "",
        thumbnail: "",
        description: "",
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
        submitNewResource(state);
        history.push("/");
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
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="title"
                        label="Title"
                        name="title"
                        onChange={handleChange}
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
                        id="thumbnail"
                        label="Link to thumbnail"
                        name="thumbnail"
                        onChange={handleChange}
                        required
                    />

                    <FormControl
                        required
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        className={classes.formControl}
                    >
                        <InputLabel htmlFor="outlined-type-simple">
                            Content Type
                        </InputLabel>
                        <Select
                            value={state.type}
                            onChange={handleChange}
                            label="Content Type"
                            inputProps={{
                                name: "type",
                                id: "outlined-type-simple",
                            }}
                        >
                            <MenuItem value={"textbook"}>Book</MenuItem>
                            <MenuItem value={"notes"}>Notes</MenuItem>
                            <MenuItem value={"video"}>Video</MenuItem>
                            <MenuItem value={"course"}>Online Course</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl
                        required
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        className={classes.formControl}
                    >
                        <InputLabel htmlFor="outlined-subject-simple">
                            Subject
                        </InputLabel>
                        <Select
                            value={state.subject}
                            onChange={handleChange}
                            label="Subject"
                            inputProps={{
                                name: "subject",
                                id: "outlined-subject-simple",
                            }}
                        >
                            <MenuItem value={"math"}>Math</MenuItem>
                            <MenuItem value={"cs"}>Computer Science</MenuItem>
                            <MenuItem value={"biology"}>Biology</MenuItem>
                            <MenuItem value={"physics"}>Physics</MenuItem>
                            <MenuItem value={"chemistry"}>Chemistry</MenuItem>
                            <MenuItem value={"other"}>Other</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl
                        required
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        className={classes.formControl}
                    >
                        <InputLabel htmlFor="outlined-audience-simple">
                            Target Audience
                        </InputLabel>
                        <Select
                            value={state.targetAudience}
                            onChange={handleChange}
                            label="Audience"
                            inputProps={{
                                name: "targetAudience",
                                id: "outlined-audience-simple",
                            }}
                        >
                            <MenuItem value={"k-5"}>K-5</MenuItem>
                            <MenuItem value={"6-8"}>6-8</MenuItem>
                            <MenuItem value={"9-12"}>9-12</MenuItem>
                            <MenuItem value={"undergraduate"}>
                                Undergraduate
                            </MenuItem>
                            <MenuItem value={"expert"}>Expert</MenuItem>
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
                        onChange={handleChange}
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
