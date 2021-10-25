import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsersProfile, savePhoto, saveProfile, updateStatus} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {ProfileType} from "../../types/type";


type MapStateType = {
    profile: ProfileType
    status: string
    login: string
    authorizedUserId: number
}
type MapDispatchType = {
    getUsersProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    saveProfile: (profile: ProfileType) => Promise<any>
    savePhoto: (file: File) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>;


const ProfileContainer: React.FC<PropsType> = ({
                                                   match,
                                                   history,
                                                   authorizedUserId,
                                                   getUsersProfile,
                                                   getStatus,
                                                   ...props
                                               }) => {

    useEffect(() => {
        let userId = +match.params.userId;

        function refreshProfile() {
            if (!userId) {
                userId = authorizedUserId;
                if (!userId) {
                    history.push('/login')
                }
            }
            getUsersProfile(userId);
            getStatus(userId)
        }

        refreshProfile()
    }, [match.params.userId, getUsersProfile, getStatus, authorizedUserId, history])

    return (
        <Profile  {...props}
                  profile={props.profile}
                  status={props.status}
                  updateStatus={props.updateStatus}
                  isOwner={!match.params.userId}
                  savePhoto={props.savePhoto}
        />
    )
}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    login: state.auth.login
})


export default compose(
    connect(mapStateToProps,
        {getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);