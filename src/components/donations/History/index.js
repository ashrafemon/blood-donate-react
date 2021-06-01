import {
    Avatar,
    Card,
    CardContent,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./styled";

const History = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.title}>
                    You have saved 5 lives, donate 50 unit
                </Typography>

                <List component="nav">
                    <ListItem button className={classes.listItem}>
                        <ListItemIcon>
                            <Avatar>1</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Kingsland Hospital" />
                        <ListItemText
                            className={classes.textRight}
                            primary="1 Times"
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem button className={classes.listItem}>
                        <ListItemIcon>
                            <Avatar>1</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Kingsland Hospital" />
                        <ListItemText
                            className={classes.textRight}
                            primary="1 Times"
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem button className={classes.listItem}>
                        <ListItemIcon>
                            <Avatar>1</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Kingsland Hospital" />
                        <ListItemText
                            className={classes.textRight}
                            primary="2 Times"
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem button className={classes.listItem}>
                        <ListItemIcon>
                            <Avatar>1</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Kingsland Hospital" />
                        <ListItemText
                            className={classes.textRight}
                            primary="1 Times"
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};

export default History;
