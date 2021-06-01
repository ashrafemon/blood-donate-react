import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    card: {
        borderRadius: 15,
        boxShadow: "0 0 10px #D8D9DA",
        marginBottom: 15,
    },
    cardContent: {
        padding: "16px !important",
    },
    cardTitle: {
        fontWeight: 600,
        lineHeight: 1.1,
    },
    postedTime: {
        color: "#787878",
    },
    contactBtn: {
        backgroundColor: "#C70100 !important",
        color: "#fff",
        borderRadius: 15,
        fontSize: 10,
        textTransform: "capitalize",
        padding: "2px 5px",
        minWidth: "initial",
    },
    shareBtn: {
        padding: 3,
        color: "#C70100",
        fontSize: 15,
    },
    bloodGroup: {
        fontWeight: 600,
        lineHeight: 1.1,
        textAlign: "right",
    },
    list: {
        padding: 0,
    },
    listItem: {
        padding: 0,
        "& .MuiTypography-root": {
            fontSize: 12,
            color: "#787878",
        },
    },
    textRight: {
        textAlign: "right",
    },
});
