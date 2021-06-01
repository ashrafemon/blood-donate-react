import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    card: {
        borderRadius: 15,
        marginBottom: 15,
        boxShadow: "0 0 10px #D8D9DA",
    },
    cardContent: {
        padding: "20px !important",
        paddingBottom: "5px !important",
    },
    infoBox: {
        marginBottom: 10,
    },
    name: {
        fontWeight: 600,
        color: "#4A4A4A",
    },
    date: {
        color: "#848484",
    },
    text: {
        color: "#848484",
        textAlign: "justify",
    },
    actionBox: {
        justifyContent: "flex-end",
        paddingRight: 20,
    },
    actionButton: {
        fontSize: 12,
        color: "#C70100",
        fontWeight: 600,
        textTransform: "lowercase",
        minWidth: "initial",
        "& svg": {
            fontSize: "12px !important",
        },
    },
});
