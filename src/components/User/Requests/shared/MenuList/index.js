import React from "react";
import { useStyles } from "./styled";

const MenuList = ({ title, data }) => {
    const classes = useStyles();

    return (
        <>
            <h3 className={classes.title}>{title}</h3>
            <ul className={classes.nav}>
                {data.map((item, index) => (
                    <li className={classes.navItem} key={index}>
                        <img
                            className={classes.navItemImage}
                            src={item.image}
                            alt="Target"
                        />
                        <p className={classes.navItemText}>{item.text}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MenuList;
