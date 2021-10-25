import React from "react";
import {Form, Field} from 'react-final-form'
import {CheckboxInput, Input} from "../common/FormsControls/formControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {getCaptchaUrl, loginUser} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {makeStyles} from "@mui/styles";
import {Button, Theme, Typography} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const useStyles = makeStyles((theme: Theme) => ({
    wrapper_login: {
        display: 'grid',
        gridTemplateColumns: '2fr 8fr 2fr',
    },
    loginContent: {
        background: '#ffffff',
        borderRadius: '6px',
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",

    },
    fieldWrapper: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",

    },
    fieldWrapperCheckbox: {
        display: 'flex',
        justifyContent: "center"

    },
    formButton: {
        display: 'flex',
        justifyContent: "center",
        padding: "18px"
    },
    loginTitle: {
        padding: "28px",
        fontFamily: "cursive",
        fontSize: "35px"
    },
    freeAcc: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        padding: "28px",
        fontFamily: "cursive",
        fontSize: "35px"
    },
}))

const Login: React.FC<any> = (props: any) => {
    const classes = useStyles();

    const onSubmit = (formData: any) => {
        props.loginUser(formData.email, formData.password, formData.rememberMe, formData.captcha)
        props.getCaptchaUrl(props.captchaUrl)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={classes.wrapper_login}>
            <div></div>
            <div className={classes.loginContent}>
                <div>
                    <span className={classes.loginTitle}>Login</span>
                </div>
                <Form
                    onSubmit={onSubmit}
                    render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div className={classes.fieldWrapper}>
                                <Field name={"email"}
                                       component={Input}
                                       validate={required}
                                       label="Email"
                                       placeholder={"Enter your email"}/>
                            </div>
                            <div className={classes.fieldWrapper}>
                                <Field name={"password"}
                                       type={"password"}
                                       validate={required}
                                       component={Input}
                                       label="Password"
                                       placeholder="Enter your password"
                                />
                            </div>
                            <div className={classes.fieldWrapperCheckbox}>
                                    <Field type={"checkbox"}
                                           name={"rememberMe"}
                                           component={CheckboxInput}
                                    />
                                <pre> </pre>Remember me
                            </div>
                            {props.captchaUrl && <div className={classes.fieldWrapper}>
                                <div>
                                    <img src={props.captchaUrl} alt="Captcha" />
                                </div>
                                <Field name={"captcha"}
                                       component={Input}
                                       validate={required}
                                       label="Captcha"
                                       placeholder={"Symbols from image"}/>
                            </div>
                            }
                            <div className={classes.formButton}>
                                <Button variant="contained"
                                        type="submit"
                                        color="info"
                                        onClick={props.goToEditMode}
                                        endIcon={<SendIcon />}>
                                    Sing In
                                </Button>
                            </div>
                        </form>
                    )}
                />
                <div className={classes.freeAcc}>
                    <Typography mb={2} variant="h4">Account to view</Typography>
                    <Typography mb={2} variant="h6">Email: public.acc@bk.ru</Typography>
                    <Typography mb={2} variant="h6">Password: qwer1234</Typography>
                    <Typography mb={2} variant="h6">Sign up:</Typography>
                    <Typography mb={2} variant="h6">
                        <a href="https://social-network.samuraijs.com/signUp">https://social-network.samuraijs.com/signUp</a>
                    </Typography>

                </div>

            </div>
            <div></div>
        </div>
    )
}


const mapStateToProps = (state: AppStateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginUser, getCaptchaUrl})(Login)