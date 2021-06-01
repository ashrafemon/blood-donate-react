import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    flexBox: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: 30,
    },
    menuCol: {
        width: "30%",
        padding: 10,
        boxSizing: "border-box",
    },
    mapCol: {
        width: "70%",
        padding: 10,
        boxSizing: "border-box",
    },
    colTitle: {
        fontSize: 24,
        fontWeight: 600,
        color: "#000",
        marginBottom: 20,
    },
    statisticBox: {
        width: "100%",
        minHeight: 180,
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: "10px 15px",
        boxSizing: "border-box",
        boxShadow: "rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt",
    },
    statisticTitle: {
        fontSize: 16,
        color: "#000",
        fontWeight: 600,
        marginBottom: 5,
    },
    statisticText: {
        fontSize: 12,
        color: "#000",
        fontWeight: 400,
        marginBottom: 5,
    },
    mapBox: {
        width: "100%",
        minHeight: 540,
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: "20px 15px",
        boxSizing: "border-box",
        boxShadow: "rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
            "url('https://www.vhv.rs/dpng/d/182-1820180_map-featured-infographic-landmarks-road-free-transparent-google.png') no-repeat top center",
        backgroundSize: "cover",
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
