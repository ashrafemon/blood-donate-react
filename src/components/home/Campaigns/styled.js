import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        width: "100%",
        position: "relative",
        "& .owl-nav": {
            width: "100%",
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            margin: 0,
            display: "flex",
            justifyContent: "space-between",

            "& button": {
                width: 30,
                height: 30,
                borderRadius: "50% !important",
                color: "#fff !important",
                fontSize: "25px !important",
                backgroundColor: "#C70100 !important",

                "& span": {
                    position: "relative",
                    top: "-2px",
                    left: "-1px",
                },

                "&:first-child": {
                    marginLeft: -10,
                },
                "&:last-child": {
                    marginRight: -10,
                },
            },
        },
    },
    item: {
        minHeight: 150,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        boxShadow: "rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        userSelect: "none",
    },
    content: {
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        padding: 5,
    },
    image: {
        width: "100%",
        height: 150,
        objectFit: "contain",
    },
    overlayBox: {
        width: "100%",
        height: "100%",
        background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(91,91,91,0.9304096638655462) 100%)",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        boxSizing: "border-box",
        padding: 15,
    },
    title: {
        color: "#fff",
        fontWeight: 400,
    },
    text: {
        color: "#fff",
        fontWeight: 400,
    },
    createBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
    },
});
