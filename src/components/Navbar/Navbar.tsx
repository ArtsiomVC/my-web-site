import React from 'react';
import {NavLink} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {Theme, Box,} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
    nav: {
        margin: theme.spacing(3, 2),
        display: "flex",
        flexDirection: "column",
        "& a": {
            fontSize: 19,
            color: '#000000',
            textDecoration: 'none',
            margin: theme.spacing(3, 1)
        },
        "& div": {
            margin: theme.spacing(1, 1)
        }
    },
}))


const Navbar: React.FC = () => {
    const classes = useStyles()

    return <Box>
        <nav className={classes.nav}>
            <div>
                <NavLink to='/Profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/Users'>Users</NavLink>
            </div>
            <div>
                <NavLink to='/Dialogs'>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/News' style={{pointerEvents: 'none'}}>News</NavLink>
            </div>
            <div>
                <NavLink to='/Music' style={{pointerEvents: 'none'}}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/Settings' style={{pointerEvents: 'none'}}>Settings</NavLink>
            </div>
        </nav>
    </Box>
}

export default Navbar


