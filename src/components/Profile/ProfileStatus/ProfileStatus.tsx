import React, {useEffect, useState} from "react";
import {TextField, Theme} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    styleStatus: {
        padding: theme.spacing(2,1),
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px',
        borderBottom: '1px solid #dce1e6',
    },
    styleStatusSpan: {
        fontWeight: 600,
        padding: theme.spacing(0,2),
    }
}))


type PropsProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}
const ProfileStatus: React.FC<PropsProfileStatusType> = (props) => {
    const classes = useStyles()

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if (props.isOwner) {
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={classes.styleStatus}>
            {!editMode &&
            <div>
                <span className={classes.styleStatusSpan}>
                    Status:
                </span>
                <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
            </div>
            }
            {editMode &&
            <div>
               <span className={classes.styleStatusSpan}>
                    Status:
                </span>
                <TextField id="outlined-basic"
                           label="Status"
                           variant="outlined"
                           size="small"
                           color="info"
                           onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}
                />
            </div>
            }
        </div>
    )
}


export default ProfileStatus