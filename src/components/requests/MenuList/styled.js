import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    title: {
        fontSize: 24,
        fontWeight: 600,
        color: "#000",
        marginBottom: 20,
    },
    nav: {
        listStyle: "none",
        margin: 0,
        marginBottom: 40,
        padding: 0,
        display: "flex",
        flexWrap: "wrap",
    },
    navItem: {
        width: "25%",
        boxSizing: "border-box",
        padding: 5,
        textAlign: "center",
        cursor: "pointer",
        userSelect: "none",
    },
    navItemImage: {
        width: "60px",
        height: "60px",
        margin: "auto",
        objectFit: "cover",
        border: "3px solid #fff",
        boxShadow: "0 0 5px #E2E3E5",
        borderRadius: "50%",
        boxSizing: "border-box",
    },
    navItemText: {
        fontSize: 14,
        color: "#000",
        fontWeight: 400,
    },
});
