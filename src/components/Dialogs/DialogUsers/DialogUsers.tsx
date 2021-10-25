import React from 'react';
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../Redux/dialogs-reducer";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
    dialogUser: {
        padding: '4px',
        fontSize: "17px",
    },
    dialogUserLink: {
        textDecoration: "none",
        color: '#000000'
    }
}))

export const DialogUsers: React.FC<DialogType> = ({id, name}) => {
    const classes = useStyles();

    let path = "/dialogs/" + id;

    return <div className={classes.dialogUser}>
        <NavLink className={classes.dialogUserLink} to={path}>{name}</NavLink>
    </div>
}
