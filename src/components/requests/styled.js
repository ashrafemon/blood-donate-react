import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    portionTitle: {
        fontWeight: 600,
        marginBottom: 15,
    },
    publishBtn: {
        padding: "10px 25px",
        backgroundColor: "#c70100",
        color: "#ffffff",
        fontSize: 16,
        fontWeight: 400,
        fontFamily: "Roboto, sans-serif",
        borderRadius: 30,
        cursor: "pointer",
        userSelect: "none",

        "&:hover": {
            backgroundColor: "rgba(199, 1, 0, 0.8)",
        },
    },
    card: {
        borderRadius: 15,
        boxShadow: "0 0 10px #D8D9DA",
    },
    cardContent: {
        padding: "10px !important",
    },
    title: {
        marginTop: 5,
        fontWeight: 600,
        lineHeight: 1,
    },
});
