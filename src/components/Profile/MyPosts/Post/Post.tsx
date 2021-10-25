import React from 'react';
import {makeStyles} from "@mui/styles";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const useStyles = makeStyles((theme) =>({
    itemPost: {
        display: "flex",
        alignItems: "center",
        fontSize: '20px',
        borderBottom: '1px solid #dce1e6',
        padding: "10px 0px",
        "& img": {
            borderRadius: '20px',
        }
    },
    postMessage: {
        flex: 1
    },
    postLike: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
}))


type InitialPropsType = {
    message: string
    value: number
}
const Post: React.FC<InitialPropsType> = (props) => {
    const classes = useStyles()

    return(
        <div className={classes.itemPost}>
            <div>
                <img width="70px"
                     alt="avatarUser"
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7S86HLw3FSPP3Iflpfq1OkfEfkB8zdRGpw&usqp=CAU'/>
            </div>
            <div className={classes.postMessage}>{props.message}</div>
            <div className={classes.postLike}>
                <ThumbUpIcon color="info"/> <span> {props.value}</span>
            </div>
        </div>
    )
}

export default Post