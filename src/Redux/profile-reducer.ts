import {profileAPI, usersAPI} from "../api/api"
import {PhotosType, PostType, ProfileType} from "../types/type";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'




let initialState = {
    PostData: [
        {id: 1, message: 'It`s my first post', value: 8},
        {id: 2, message: 'Hi, how are you?', value: 12},
        {id: 3, message: "I'm fine", value: 3}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
    newPostText: ""
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case  ADD_POST: {
            let newPost = {
                id: +state.PostData.length + 1,
                message: action.newPostText,
                value: 0
            };
            return {
                ...state,
                PostData: [...state.PostData, newPost],
                newPostText: ""
            };
        }
        case  SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case  SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case  SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state;
    }
}


type AddPostActionCreatorActionType = {
    type: typeof ADD_POST,
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({type: ADD_POST, newPostText})
type SetUsersProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}
export const setUsersProfile = (profile: ProfileType): SetUsersProfileActionType => ({type: SET_USER_PROFILE, profile})
type setStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}
export const setStatus = (status: string): setStatusActionType => ({type: SET_STATUS, status})
type savePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})


export const getUsersProfile = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUsersProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUsersProfile(userId))
    }
}

export default profileReducer;