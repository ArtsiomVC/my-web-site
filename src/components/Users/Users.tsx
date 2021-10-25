import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/type";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    wrapperUsers: {
        background: '#ffffff',
        borderRadius: '6px',
    },
    usersContainer: {
        padding: "30px"
    }
}))

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    users: Array<UserType>,
    followingInProgress: Array<number>,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}
let Users: React.FC<PropsType> = ({
                                      totalUsersCount,
                                      pageSize,
                                      currentPage,
                                      onPageChanged,
                                      users,
                                      ...props
                                  }) => {

    const classes = useStyles()
    return (
        <div className={classes.wrapperUsers}>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            <div className={classes.usersContainer}>
                {users.map(u => <User user={u}
                                      followingInProgress={props.followingInProgress}
                                      unfollow={props.unfollow}
                                      follow={props.follow}
                                      key={u.id}/>
                )}
            </div>
        </div>
    )
}

export default Users