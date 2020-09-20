import React from "react";
import { connect } from "react-redux";

import Link from "react-router-dom/Link";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { signOut } from "../thunks";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        background:
            "linear-gradient(90deg, rgba(25,13,48,1) 0%, rgba(20,24,51,1) 50%, rgba(13,43,60,1) 100%)",
    },
    grow: {
        flexGrow: 1,
        flexBasis: 0,
    },
    title: {},
    rightBar: {
        display: "flex",
        justifyContent: "flex-end",
        flexGrow: 1,
        flexBasis: 0,
    },
}));

function Navbar({ user, signOut }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const menuId = "primary-search-account-menu";
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const signOutClick = () => {
        signOut();
        handleMenuClose();
    };

    // account menu if logged in
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem disabled>{user}</MenuItem>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={signOutClick}>Log out</MenuItem>
        </Menu>
    );

    return (
        <>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <div className={classes.grow}>
                        <Button component={Link} to="/" color="primary">
                            <Typography variant="h4" className={classes.title}>
                                versity
                            </Typography>
                        </Button>
                    </div>

                    <Button color="inherit">SUBMIT</Button>

                    <div className={classes.rightBar}>
                        {user ? (
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        ) : (
                            <Button
                                component={Link}
                                to="/login"
                                color="inherit"
                            >
                                LOG IN
                            </Button>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            dispatch(signOut());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
