import React from 'react';
import Post from "./Post/Post";
import {Form} from "react-final-form";
import {PostType} from "../../../types/type";
import {makeStyles} from "@mui/styles";
import {Box, Button, Theme, Typography} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {createField, Textarea} from "../../common/FormsControls/formControls";

const useStyles = makeStyles((theme: Theme) => ({
    profileMyPost: {
        background: theme.palette.common.white,
        "& button": {
            margin: theme.spacing(3, 2, 4, 5)
        },
        "& div": {
            margin: theme.spacing(1, 2,)
        },
    },
}))


type AddNewPostFormPropsType = {
    onSubmit: (values: any) => void
}
const AddNewPostForm: React.FC<AddNewPostFormPropsType> = (props) => {
    return <Form
        onSubmit={props.onSubmit}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    {createField("Enter your message", "newPostText", [], Textarea, "Post message")}
                    <Button variant="contained"
                            color="info"
                            endIcon={<SendIcon/>}
                            type="submit"
                            name={"btnAddPost"}
                    >
                        Send
                    </Button>
                </div>
            </form>
        )}
    />
}

type InitialMyPostPropsType = {
    PostData: PostType[]
    newPostText: string
    addPost: (newPostText: string) => void
}


const MyPosts: React.FC<InitialMyPostPropsType> = React.memo(props => {
    const classes = useStyles();

    let PostDataNew = props.PostData.map(
        (element) => {
            return (
                <Post key={element.id} message={element.message} value={element.value}/>
            )
        }
    );

    let onAddPost = (formData: any) => {
        props.addPost(formData.newPostText);
        formData.newPostText = "";
    }

    return <Box m={1}>
        <div className={classes.profileMyPost}>
            <div>
                <Typography pt={3} variant="h3" sx={{
                    textAlign: 'center'
                }}>
                    My posts
                </Typography>
                <AddNewPostForm onSubmit={onAddPost}/>
            </div>
            <div>
                {PostDataNew}
            </div>
        </div>
    </Box>
})


export default MyPosts