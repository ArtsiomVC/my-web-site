import {addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        PostData: state.profilePage.PostData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


