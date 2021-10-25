import React from "react";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    wrapperPreloader: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    },
}))

let Preloader = () => {
    const classes = useStyles();
     return <div className={classes.wrapperPreloader}>
         <h1>Loading...</h1>
    </div>
}

export default Preloader