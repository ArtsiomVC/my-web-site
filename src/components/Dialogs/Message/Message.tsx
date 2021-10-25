import React from 'react';
import {MessageType} from "../../../Redux/dialogs-reducer";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
    wrapperMessage: {
        padding: '5px',
        fontSize: "19px",

    },

}))

export const Message: React.FC<MessageType> = ({id, message}) => {
    const classes = useStyles();

    return <div className={classes.wrapperMessage}>
       <span>{id}.</span> {message}
    </div>
}

