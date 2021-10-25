import React, {useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import {ProfileDataForm} from "./ProfileDataForm";
import {ContactsType, ProfileType} from '../../../types/type';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import {makeStyles} from '@mui/styles';
import {Box, Button, Theme, Typography} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles((theme: Theme) => ({
    ProfileDataDiv: {
        marginTop: theme.spacing(2),
        color: theme.palette.grey["100"],
        fontSize: "19px",
        '& span': {
            color: theme.palette.grey["500"],
            paddingRight: theme.spacing(1),
            fontWeight: 500,
        },
    },
    contactsContainer: {
        "& span": {
            paddingLeft: theme.spacing(3)
        },
        "& a": {
            color: theme.palette.grey["100"],
            textDecoration: "none",
        },
    },
    goEditModButton: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center'
    }
}))

export type PropsProfileInfoType = {
    profile: ProfileType
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
    saveProfile: (profile: ProfileType) => Promise<any>
    savePhoto: (file: File) => void
}


const ProfileInfo: React.FC<PropsProfileInfoType> = (props) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onSubmit = (formData: ProfileType) => {
        props.saveProfile(formData)
        setEditMode(false)
    }

    return <Box p={3} style={{background: '#ffffff'}}>
        <Typography sx={{fontWeight: 700}} variant="h4">
            {props.profile.fullName}
        </Typography>
        <ProfileStatus status={props.status}
                       updateStatus={props.updateStatus}
                       isOwner={props.isOwner}
        />
        {editMode
            ? <ProfileDataForm profile={props.profile}
                               initialValues={props.profile}
                               isOwner={props.isOwner}
                               onSubmit={onSubmit}
                               goToEditMode={() => {
                                   setEditMode(false)
                               }}/>
            : <ProfileData profile={props.profile}
                           isOwner={props.isOwner}
                           goToEditMode={() => {
                               setEditMode(true)
                           }}/>}
    </Box>
}
type InitialPropsProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData: React.FC<InitialPropsProfileDataType> = (props) => {
    const classes = useStyles()

    return <div className={classes.ProfileDataDiv}>
        <div>
            <span>Name:</span> {props.profile.fullName}
        </div>
        <div>
            <span>About me:</span> {props.profile.aboutMe}
        </div>
        <div>
            <span>My professional skills:</span>
            {props.profile.lookingForAJobDescription}
        </div>
        <div>
            <span>Looking for a job:</span>
            {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
            <span>Contacts:</span>
        </div>
        <div className={classes.contactsContainer}>
            {Object
                .keys(props.profile.contacts)
                .map((key) => {
                    return <Contact key={key}
                                    contactTitle={key}
                                    contactValue={props.profile.contacts[key as keyof ContactsType]}
                    />
                })}
        </div>
        <div className={classes.goEditModButton}>
            {props.isOwner
                ? <Button variant="contained"
                          color="info"
                          onClick={props.goToEditMode}
                          endIcon={<SendIcon/>}>
                    Edit
                </Button>
                : <></>
            }
        </div>
    </div>
}

type InitialPropsContactType = {
    contactTitle: string
    contactValue: string
}
export const Contact: React.FC<InitialPropsContactType> = ({contactTitle, contactValue}) => {
    return <div>
        <span>
            {contactTitle}:
        </span>
        <a href={contactValue}>{contactValue}</a>
    </div>
}


export default ProfileInfo
