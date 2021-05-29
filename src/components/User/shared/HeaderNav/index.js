import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaEllipsisV } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import AvatarImg from "./../../../../assets/images/male.png";
import { useStyles } from "./styled";

const HeaderNav = () => {
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
                <div className={classes.userBox}>
                    <div className={classes.userName}>John Doe</div>
                    <div className={classes.userRate}>Top Rated Donor</div>
                </div>

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

export default HeaderNav;
