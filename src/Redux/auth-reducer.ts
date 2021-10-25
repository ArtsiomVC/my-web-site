import {authAPI, ResultCodesEnum, ResultCodesForCapchaEnum, securityAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

export type InitialStateType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}
let initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_CAPTCHA_URL_SUCCESS:
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}
type SetAuthUserDataActionPayloadType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

export const setAuthUserData = (userId: number | null,
                                email: string | null,
                                login: string | null,
                                isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})

type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})


export const getAuthUserData = () => async (dispatch: any) => {
    const meData = await authAPI.me()
    if (meData.resultCode === ResultCodesEnum.Success) {
        let { id, email, login } = meData.data
        dispatch(setAuthUserData(id, email, login, true))
    }


}

export const loginUser = (email: string, password: string, rememberMe: boolean,
                          captcha: string) => async (dispatch: any) => {
    const response = await authAPI.loginUser(email, password, rememberMe, captcha)
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (response.resultCode === ResultCodesForCapchaEnum.CapchaIsRequred) {
            dispatch(getCaptchaUrl())
        }
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))

}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer;