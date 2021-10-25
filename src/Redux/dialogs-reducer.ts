const SEND_MESSAGE = 'SEND-MESSAGE';

export type InitialDialogStateType = typeof  initialState
export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string
}

let initialState = {
    dialogsData: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Artiom'},
        {id: 3, name: 'Petia'},
        {id: 4, name: 'Dasha'},
        {id: 5, name: 'Andrey'},
        {id: 6, name: 'Ira'}
    ] as Array<DialogType>,
    messageData: [
        {id: 1, message: 'Hellow'},
        {id: 2, message: 'You watch films?'},
        {id: 3, message: 'Go to the park'}
    ]as Array<MessageType>
};



const dialogReducer = (state = initialState, action: any): InitialDialogStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messageData: [...state.messageData, {id: ++state.messageData.length, message: body}]
            }
    }
        default:
            return state
    }
}
type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}
export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogReducer