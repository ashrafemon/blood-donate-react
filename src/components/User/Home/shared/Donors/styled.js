import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
        width: "90%",
        paddingTop: 20,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        overflowX: "auto",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
    item: {
        flex: 1,
        height: 100,
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: "10px 15px",
        boxSizing: "border-box",
        boxShadow: "rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt",
        display: "flex !important",
        alignItems: "center",
        gap: "10px",
        position: "relative",
        cursor: "pointer",
    },
    itemBlood: {
        width: 50,
        height: 50,
        objectFit: "contain",
        position: "absolute",
        top: -20,
        right: 10,
    },
    avatarBox: {
        width: 50,
        height: 50,
        borderRadius: "50%",
    },
    avatar: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },
    detailBox: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        color: "#000",
        fontWeight: 600,
        marginBottom: 5,
    },
    address: {
        fontSize: 14,
        color: "#000",
        fontWeight: 400,
        marginBottom: 5,
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
        fontSize: 14,
        color: "#000",
        fontWeight: 400,
    },
});
