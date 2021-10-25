import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk';
import appReducer from "./app-reducer";


let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

let store = createStore(rootReducers, applyMiddleware(thunkMiddleWare));


export default store;