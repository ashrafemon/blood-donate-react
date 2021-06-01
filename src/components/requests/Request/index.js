import {
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@material-ui/core";
import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { useStyles } from "./styled";

const Request = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h6" className={classes.cardTitle}>
                            Schedule
                        </Typography>
                        <Typography
                            variant="caption"
                            className={classes.postedTime}
                        >
                            at Sun 11:30 PM
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button size="small" className={classes.contactBtn}>
                            Contact
                        </Button>
                        <IconButton className={classes.shareBtn}>
                            <FaShareAlt />
                        </IconButton>
                    </Grid>
                </Grid>

                <Typography variant="h6" className={classes.bloodGroup}>
                    O+
                </Typography>

                <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                        <ListItemText>Jarin Hospital 3km Away</ListItemText>
                        <ListItemText className={classes.textRight}>
                            1 min ago
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem className={classes.listItem}>
                        <ListItemText>21/3, Los Angles, CA</ListItemText>
                        <ListItemText className={classes.textRight}>
                            Brother
                        </ListItemText>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};

export default Request;
