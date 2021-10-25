import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";

export type DispatchPropsHeaderType = {
    logout: () => void
}
type MapHeaderType = ReturnType<typeof mapStateToProps>
const HeaderContainer: React.FC<MapHeaderType & DispatchPropsHeaderType> = (props) => {
    return <Header {...props}/>
}


const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

});

export default connect(mapStateToProps, {logout})(HeaderContainer)