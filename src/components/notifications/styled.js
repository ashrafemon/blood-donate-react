import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    grid: {
        borderRight: "2px solid #DEDFE1",
        "@media(max-width: 599px)": {
            borderRight: 0,
            borderBottom: "2px solid #DEDFE1",
        },
    },
    card: {
        borderRadius: 5,
        boxShadow: "0 0 10px #D8D9DA",
        marginBottom: 15,
    },
    cardContent: {
        padding: "10px !important",
    },
    avatar: {
        width: 55,
        height: 55,
        backgroundColor: "#fff",
        color: "#CE2322",
        boxShadow: "0 0 10px #E6E6E6",
    },
});
