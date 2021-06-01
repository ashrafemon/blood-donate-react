import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    card: {
        borderRadius: 15,
        boxShadow: "0 0 10px #D8D9DA",
    },
    cardContent: {
        padding: "30px !important",
    },
    title: {
        fontWeight: 600,
        marginBottom: 20,
    },
    listItem: {
        fontWeight: 600,
        "& .MuiAvatar-colorDefault": {
            backgroundColor: "#C70100",
        },
        "& .MuiTypography-root": {
            fontWeight: 600,
        },
    },
    textRight: {
        textAlign: "right",
    },
});
