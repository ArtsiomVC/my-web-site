import React from "react";
import {connect} from "react-redux";
import {
    follow, requestUsers,
    unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersSuperSelector
} from "../../Redux/users-selectors";
import {UserType} from "../../types/type";
import {AppStateType} from "../../Redux/redux-store";

type MapStatePropsType = {
    pageSize: number
    currentPage: number
    isFetching: boolean
    totalUsersCount: number
    followingInProgress: Array<number>
    users: Array<UserType>
}
type MapDispatchPropsType = {
    getUsers: (pageSize: number, currentPage: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps,
        {
            follow,
            unfollow,
            getUsers: requestUsers
        }
    )
)(UsersContainer)