import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    list: {
        listStyle: "none",
        width: "100%",
        margin: "0 0 20px",
        padding: 0,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        userSelect: "none",
        "@media(max-width: 450px)": {
            flexDirection: "column",
            gap: "20px",
            alignItems: "flex-end",
        },
    },
    listItem: {
        fontSize: 18,
        fontFamily: "Roboto, sans-serif",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontWeight: "bold",
        cursor: "pointer",
        textTransform: "capitalize",
        "& svg": {
            fontSize: 16,
            color: "#c70100",
        },
        "&:lastChild": {
            "& svg": {
                fontSize: 22,
            },
        },
        "@media(max-width: 450px)": {
            width: "100%",
            "&:last-child": {
                justifyContent: "center",
            },
        },
    },
    userBox: {
        textTransform: "capitalize",
        textAlign: "right",
    },
    userName: {
        fontSize: 18,
        fontFamily: "Roboto, sans-serif",
        fontWeight: "bold",
        color: "#000",
    },
    userRate: {
        fontSize: 14,
        fontFamily: "Roboto, sans-serif",
        color: "#000",
        fontWeight: "400",
    },
    userAvatar: {
        width: 40,
        height: 40,
        objectFit: "contain",
        borderRadius: "50%",
    },
});
