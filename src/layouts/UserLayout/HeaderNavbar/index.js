import { Box, Button, Popover, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaEllipsisV } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../../store/actions/authActions";
import { useStyles } from "./styled";

const HeaderNavbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const currentUser = useSelector((state) => state.auth.currentUser);

    const [pageName, setPageName] = useState("");

    useEffect(() => {
        let name = history.location.pathname;
        name = name.replace("/", "");
        setPageName(name);
    }, [history.location.pathname]);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <>
            <ul className={classes.list}>
                <li className={classes.listItem}>
                    <FaArrowLeft /> {pageName}
                </li>

                <li className={classes.listItem} onClick={handleClick}>
                    <Box className={classes.userBox}>
                        <Typography className={classes.userName}>
                            {currentUser.name}
                        </Typography>
                        <Typography className={classes.userRate}>
                            Beginner Donor
                        </Typography>
                    </Box>

                    <img
                        className={classes.userAvatar}
                        src={currentUser.profile.avatar}
                        alt="User"
                    />

                    <FaEllipsisV />
                </li>
            </ul>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <Button
                    onClick={() => dispatch(logout())}
                    variant="contained"
                    color="secondary"
                >
                    Logout
                </Button>
            </Popover>
        </>
    );
};

export default HeaderNavbar;
