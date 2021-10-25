import React from "react";
import userPhoto from "../../assets/img/png-transparent-computer-icons-user-user-icon-thumbnail.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/type";
import {makeStyles} from "@mui/styles";
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send'
import BackspaceIcon from '@mui/icons-material/Backspace';

const useStyles = makeStyles((theme) => ({
    wrapperUser: {
        borderBottom: '1px solid #dce1e6',
        padding: "20px 0px",
        display: 'flex',
        alignItems: 'center',
    },
    userImage: {
        height: '120px',
        borderRadius: '80px',
    },
    userInfo: {
        flex: 1,
        padding: "10px 15px",
        alignSelf: 'flex-start'
    },
    spanKey: {
        fontSize: '18px',
        fontWeight: 600,
        padding: '7px'
    },

}))

type InitialPropsType = {
    user: UserType,
    followingInProgress: Array<number>,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}
let User: React.FC<InitialPropsType> = ({user, followingInProgress, unfollow, follow}) => {
    const classes = useStyles()

    return (
        <div className={classes.wrapperUser}>

            <div>
                <NavLink to={'/Profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="imgUser"
                         className={classes.userImage}/>
                </NavLink>
            </div>
            <div className={classes.userInfo}>
                <div>
                    <span className={classes.spanKey}>Name:</span>
                    <span>{user.name || "Not filled"}</span>
                </div>
                <div>
                    <span className={classes.spanKey}>Status:</span>
                    <span>{user.status || "Not filled"}</span>
                </div>
                <div>
                    <span className={classes.spanKey}>ID:</span>
                    <span>{user.id}</span>
                </div>
            </div>
            <div>
                {user.followed
                    ? <Button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}
                              variant="contained"
                              color="warning"
                              endIcon={<BackspaceIcon/>}
                    >
                        Unfollow
                    </Button>

                    : <Button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}
                              variant="contained"
                              color="info"
                              endIcon={<SendIcon/>}
                    >
                        Follow
                    </Button>
                }
            </div>
        </div>
    )
}

export default User