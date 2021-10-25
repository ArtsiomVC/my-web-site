import React from "react";
import {makeStyles, styled} from "@mui/styles";
import {Box, IconButton, Typography} from "@mui/material";
import userPhoto from "../../../assets/img/png-transparent-computer-icons-user-user-icon-thumbnail.png";
import {ProfileType} from "../../../types/type";
import Preloader from "../../common/Preloader/Preloader";
import {PhotoCamera} from "@mui/icons-material";

const useStyles = makeStyles({
    profileImageContainer: {
        textAlign: 'center',
        display: "flex",
        flexDirection: "column",
        // height: '100%',
        // flex: 1
    },
    imgEdit: {
        display: "block",
        width: '100%',
        height: 'auto',
    },
    changePhotoDiv: {
        // flex: "1 0 auto"
    }
})
const Input = styled('input')({
    display: 'none',
});

type InitialPropsType = {
    profile: ProfileType
    isOwner: boolean
    savePhoto: (file: File) => void
}
const ProfileImg: React.FC<InitialPropsType> = ({isOwner, profile, savePhoto}) => {
    const classes = useStyles()

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return <Box p={3} sx={{backgroundColor: 'common.white'}}>
        <div className={classes.profileImageContainer}>
            <img alt="ProfilePhoto" className={classes.imgEdit} src={profile.photos.large || userPhoto}/>
            <div className={classes.changePhotoDiv}>
                {isOwner && <Box p={2}>
                    <Typography variant='h5'>Сhange photo:</Typography>
                    <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file" onChange={mainPhotoSelected}/>
                        <IconButton color='warning' aria-label="upload picture" component="span">
                            <PhotoCamera fontSize="large"/>
                        </IconButton>
                    </label>
                </Box>}
            </div>
        </div>
    </Box>

}


export default ProfileImg