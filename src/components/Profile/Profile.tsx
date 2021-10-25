import React from 'react';
import ProfileInfo, {PropsProfileInfoType} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileImg from "./ProfileImg/ProfileImg";
import {Box, Grid} from '@mui/material';


const Profile: React.FC<PropsProfileInfoType> = (props) => {
    return <Box sx={{flexGrow: 1}}>
        <Grid container spacing={3}>
            <Grid item  xs={4}>
                <div>
                    <ProfileImg profile={props.profile}
                                isOwner={props.isOwner}
                                savePhoto={props.savePhoto}
                    />
                </div>
            </Grid>
            <Grid item xs={8}>
                <div>
                    <ProfileInfo profile={props.profile}
                                 status={props.status}
                                 isOwner={props.isOwner}
                                 updateStatus={props.updateStatus}
                                 saveProfile={props.saveProfile}
                                 savePhoto={props.savePhoto}
                    />
                </div>
            </Grid>
            <Grid item xs={12}>
                <div>
                    <MyPostsContainer/>
                </div>
            </Grid>
        </Grid>
    </Box>
}

export default Profile