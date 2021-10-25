import {Form} from "react-final-form";
import React from "react";
import {createField, Textarea} from "../../common/FormsControls/formControls";
import {Button, Theme} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    profileMyPost: {
        margin: "25px"
    },
    myPostContainer: {
        padding: "8px"
    },
    myPostButton: {
        padding: "15px 0px 15px 32px "
    }
}))

type InitialPropsType = {
    onSubmit: (newMessageBody: string) => void
}


export const AddMessageForm: React.FC<InitialPropsType> = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Form
                onSubmit={props.onSubmit}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={classes.myPostContainer}>
                            <div>
                                {createField("Enter you message", "newMessageBody", [], Textarea, "Message")}
                            </div>
                            <div className={classes.myPostButton}>
                                <Button variant="contained"
                                        color="info"
                                        endIcon={<SendIcon/>}
                                        type="submit" name={"btnAddPost"}
                                >
                                    Send
                                </Button>
                            </div>
                        </div>
                    </form>
                )}
            />
        </div>

    )
}