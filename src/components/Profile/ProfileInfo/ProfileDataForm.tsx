import React from "react";
import {CheckboxInput, createField, Input, Textarea} from "../../common/FormsControls/formControls";
import {Field, Form} from "react-final-form";
import {ProfileType} from "../../../types/type";
import SaveIcon from '@mui/icons-material/Save';
import {Button} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {required} from "../../../utils/validators/validators";

const useStyles = makeStyles((theme) => ({
    FormDataDiv: {
        padding: "8px 0px",
        display: 'flex',
        alignItems: "center",
        fontSize: '19px',
    },
    FormDataButton: {
        margin: "15px 0px 0px 0px",
        display: 'flex',
        justifyContent: 'center',
    },
    ContactsContainer: {
        fontSize: '19px',
    },
    FormDataDivContact: {
        display: 'flex',
        alignItems: 'center',
        padding: "4px 3px 4px 16px",
        fontSize: '19px',
        color: '#2a5885',
    },
    FormDataSpan: {
        color: '#818e9c',
        paddingRight: "10px",
        fontWeight: 600,
    },
}))

type InitialPropsType = {
    profile: ProfileType
    initialValues: ProfileType
    isOwner: boolean
    onSubmit: (formData: ProfileType) => void
    goToEditMode: () => void
}
export const ProfileDataForm: React.FC<InitialPropsType> = (props) => {
    const classes = useStyles()

    return <Form
        onSubmit={props.onSubmit}
        initialValues={{
            ...props.profile,
        }}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <div className={classes.FormDataDiv}>
                        <span className={classes.FormDataSpan}>Name:</span>
                        <span>
                            {<Field name={"fullName"}
                                    component={Input}
                                    validate={required}
                                    placeholder={"Full name"}
                            />}
                        </span>
                    </div>
                    <div className={classes.FormDataDiv}>
                        <span className={classes.FormDataSpan}>About me:</span>
                        <span>
                            {<Field name={"aboutMe"}
                                    component={Input}
                                    placeholder={"About me"}
                            />}
                        </span>
                    </div>
                    <div className={classes.FormDataDiv}>
                        <span className={classes.FormDataSpan}>My professional skills:</span>
                        <span>
                            {<Field name={"lookingForAJobDescription"}
                                    component={Textarea}
                                    placeholder={"My professional skills"}
                            />}
                        </span>
                    </div>
                    <div className={classes.FormDataDiv}>
                        <span className={classes.FormDataSpan}>Looking for a job:</span>
                        <span>
                            {<Field name={"lookingForAJob"}
                                    component={CheckboxInput}
                                    type={'checkbox'}
                            />}
                        </span>
                    </div>
                    <div className={classes.ContactsContainer}>
                        <span
                            className={classes.FormDataSpan}>Contacts:</span> {Object.keys(props.profile.contacts).map(key => {
                        return <div key={key} className={classes.FormDataDivContact}>
                            <span className={classes.FormDataSpan}>{createField(key, "contacts." + key, [required], Input, key)}</span>
                        </div>
                    })}
                    </div>
                    <div className={classes.FormDataButton}>
                        <Button variant="contained"
                                type="submit"
                                color="warning"
                                endIcon={<SaveIcon/>}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </form>
        )}
    />
}