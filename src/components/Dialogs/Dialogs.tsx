import React from 'react';
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";
import {Message} from './Message/Message';
import {InitialDialogStateType} from "../../Redux/dialogs-reducer";
import {DialogUsers} from "./DialogUsers/DialogUsers";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
    wrapperDialogs: {
        display: 'grid',
        gridTemplateColumns: '2fr 10fr',
        gridGap: '1rem',
    },
    dialogUsers: {
        background: theme.palette.common.white,
        borderRadius: '6px',
        padding: "20px",

    },
    dialogMessage: {
        background: '#ffffff',
        borderRadius: '6px',
        padding: "20px",
    }
}))

type InitialPropsType = {
    dialogsPage: InitialDialogStateType
    sendMessage: (MessageText: string) => AddNewMessageType
}
type AddNewMessageType = {
    newMessageBody: string
}

const Dialogs: React.FC<InitialPropsType> = ({
                                                 dialogsPage,
                                                 sendMessage
                                             }) => {
    const classes = useStyles();

    let state = dialogsPage;

    let dialogsDataNew = state.dialogsData.map(
        (element) => {
            return <DialogUsers name={element.name}
                                key={element.id}
                                id={element.id}
            />
        }
    )

    let messageDataNew = state.messageData.map(
        (element) => {
            return <Message message={element.message}
                            key={element.id}
                            id={element.id}
            />
        }
    )

    let addNewMessage = (formData: any) => {
        sendMessage(formData.newMessageBody)
        formData.newMessageBody = "";
    }

    return <div className={classes.wrapperDialogs}>
        <div className={classes.dialogUsers}>
            {dialogsDataNew}
        </div>
        <div className={classes.dialogMessage}>
            {messageDataNew}
            <div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    </div>
}

export default Dialogs