import React from 'react';
import {NavLink} from "react-router-dom";
import {AppBar, Box, Button, Toolbar, Typography, Theme, Avatar, Menu, MenuItem} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles((theme: Theme) => ({
    header: {
        display: "flex",
        alignItems: 'center',
        gridArea: 'h'
    },
    nameSite: {
        color: '#000000',
        textDecoration: 'none',
        fontFamily: 'cursive',
    },
    buttonLog: {
        color: '#000000',
        textDecoration: 'none',
    },
    buttonLogIn: {
        color: '#000000',
        textDecoration: 'none',
        fontFamily: 'cursive',
        fontWeight: 600
    },
    logPanel: {
        display: "flex",
        alignItems: 'center',
    },
    userLogin: {
        fontWeight: 600,
        fontSize: '18px',
    }
}))

type PropsHeader = {
    isAuth: any
    login: any
    logout: () => void
}
const Header: React.FC<PropsHeader> = ({isAuth, login, logout}) => {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<any>): void => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOutUser = () => {
        handleClose();
        logout();

    }

    return (
        <Box className={classes.header}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="h4"
                                component="div"
                                sx={{flexGrow: 1}}>
                        <NavLink to='/Profile'
                                 className={classes.nameSite}
                        >
                            MyWebSite
                        </NavLink>
                    </Typography>
                    <div>
                        {isAuth
                            ? <div className={classes.logPanel}>
                                <span className={classes.userLogin}>{login}</span>
                                <Button
                                    id="basic-button"
                                    aria-controls="basic-menu"
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <Avatar
                                        alt={login}
                                        src='#'
                                        sx={{width: 45, height: 45}}
                                    />
                                    <ArrowDropDownIcon fontSize="large" color="disabled"/>
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <NavLink to={'/Profile/'} className={classes.buttonLog}>
                                            <span>Profile</span>
                                        </NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <NavLink to={'/Users/'} className={classes.buttonLog}>
                                            <span>Users</span>
                                        </NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <NavLink to={'/Dialogs/'} className={classes.buttonLog}>
                                            <span>Dialogs</span>
                                        </NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={logOutUser}>Logout</MenuItem>
                                </Menu>
                            </div>
                            : <Button color="inherit">
                                <NavLink to={'/login/'} className={classes.buttonLogIn}>
                                    Login
                                </NavLink>
                            </Button>

                        }
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header
