import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    campaignBox: {
        width: "100%",
        display: "flex",
    },
    campaignItem: {
        flex: 1,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        boxShadow: "rgb(0 0 0 / 16%) 0px 1pt 4pt, rgb(0 0 0 / 8%) 0px 2pt 8pt",
        minHeight: 200,
    },
    campaignItemContent: {},
});
