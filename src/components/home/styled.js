import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    colTitle: {
        fontSize: 24,
        fontWeight: 600,
        color: "#000",
        marginBottom: 20,
    },
    statistic: {
        minHeight: 180,
        borderRadius: 15,
        boxShadow: "rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt",
    },
    statisticContent: {
        padding: "10px 15px",
    },
    statisticTitle: {
        color: "#000",
        fontWeight: 600,
        lineHeight: 1.2,
    },
    statisticText: {
        color: "#000",
        fontWeight: 400,
        lineHeight: 1,
        marginBottom: 5,
    },
    mapBox: {
        width: "100%",
        height: "100%",
        maxHeight: "550px",
        minHeight: "500px",
        borderRadius: 15,
        boxSizing: "border-box",
        boxShadow: "rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt",
        overflow: "hidden",
        position: "relative",
    },
    mapHeaderBox: {
        display: "flex",
    },
    searchBox: {
        width: "70%",
        position: "relative",
    },
    searchField: {
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt",
        height: 50,
        border: 0,
        outline: 0,
        padding: "5px 5px 5px 50px",
        boxSizing: "border-box",
        borderRadius: 30,
        fontSize: 16,
        fontWeight: 600,
    },
    searchFieldPrepend: {
        position: "absolute",
        top: "50%",
        left: 20,
        transform: "translateY(-50%)",
        "& svg": {
            fontSize: 20,
            color: "#EBA8A8",
        },
    },
});
