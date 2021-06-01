import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        width: "90%",
        "@media(max-width: 600px)": {
            width: "60%",
        },
    },
    item: {
        borderRadius: 5,
        boxShadow: "rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt",
        overflow: "initial !important",
    },
    itemContent: {
        padding: "15px !important",
        position: "relative",
        cursor: "pointer",
    },
    itemBlood: {
        width: 50,
        height: 50,
        objectFit: "contain",
        position: "absolute",
        top: -20,
        right: 0,
    },
    name: {
        color: "#000",
        fontWeight: 600,
        lineHeight: 1.2,
        marginBottom: 5,
    },
    address: {
        display: "block",
        fontSize: 10,
        color: "#000",
        fontWeight: 400,
        lineHeight: 1.2,
        marginBottom: 3,
    },
    infoList: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    infoListItem: {
        fontSize: 10,
        color: "#000",
        fontWeight: 400,
    },
});
