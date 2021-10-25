import React from 'react';
import {sendMessageCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../Redux/redux-store";


const DialogsContainer: React.FC<any> = (props) => {
return(
    <Dialogs {...props}/>
)
}
let mapStateToProps = (state: AppStateType) => ({
    dialogsPage: state.dialogsPage,
})

let mapDispatchToProps = (dispatch: any) => ({
    sendMessage: (newMessageBody: string) => {
        dispatch(sendMessageCreator(newMessageBody))
    }
})


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer)