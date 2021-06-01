import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaEllipsisV } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import AvatarImg from "./../../../assets/images/male.png";
import { useStyles } from "./styled";

const HeaderNavbar = () => {
    const history = useHistory();
    const classes = useStyles();

    const [pageName, setPageName] = useState("");

    useEffect(() => {
        let name = history.location.pathname;
        name = name.replace("/", "");
        setPageName(name);
    }, [history.location.pathname]);

    return (
        <ul className={classes.list}>
            <li className={classes.listItem}>
                <FaArrowLeft /> {pageName}
            </li>

            <li className={classes.listItem}>
                <Box className={classes.userBox}>
                    <Typography className={classes.userName}>
                        John Doe
                    </Typography>
                    <Typography className={classes.userRate}>
                        Top Rated Donor
                    </Typography>
                </Box>

                <img
                    className={classes.userAvatar}
                    src={AvatarImg}
                    alt="User"
                />

                <FaEllipsisV />
            </li>
        </ul>
    );
};

export default HeaderNavbar;
