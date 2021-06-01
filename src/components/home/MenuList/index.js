import { Avatar, Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styled";

const MenuList = ({ title, data }) => {
    const classes = useStyles();

    return (
        <Box>
            <Typography variant="h5" className={classes.title}>
                {title}
            </Typography>
            <ul className={classes.list}>
                {data.map((item, index) => (
                    <li className={classes.item} key={index}>
                        <Box className={classes.avatarBox}>
                            <Typography
                                variant="caption"
                                className={classes.badgeCount}
                            >
                                2
                            </Typography>
                            <Avatar
                                className={classes.avatar}
                                src={item.image}
                                alt="Target"
                            />
                        </Box>

                        <Typography variant="body2" className={classes.text}>
                            {item.text}
                        </Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
};

export default MenuList;
