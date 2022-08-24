import React from "react";
import {Formik, Form, FormikHelpers} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import {FormikControl} from "../Forms/FormikControl";
import classes from "./Login.module.css";
import {connect} from "react-redux";
import {login} from "../../redux/auth/auth-reducer";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";

type InitialValuesType = {
    email: string
    password: string
    rememberMe: Array<string | null>
    captcha: string | null
}

const initialValues: InitialValuesType = {
    email: '',
    password: '',
    rememberMe: [],
    captcha: ''
}

const rememberMeOption = [
    {key: 'Remember me', value: 'true'}
]

type MapStateProps = {
    isAuth: boolean
    captchaURL: string | null
}

type MapDispatchProps = {
    login: (email: string, password: string, rememberMe: string | null, captcha: string | null, setStatus: any) => void
}

type LoginType = MapStateProps & MapDispatchProps

const Login: React.FC<LoginType> = ({login, isAuth, captchaURL}) => {
    const onSubmit = (values: InitialValuesType, action: FormikHelpers<InitialValuesType>) => {
        login(values.email, values.password, values.rememberMe[0], values.captcha, action.setStatus)
        action.setSubmitting(false)
        action.resetForm()
    }

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={loginFormSchema}
            >
                {
                    formik => {
                        return (
                            <Form className={classes.form}>
                                <div className={classes.form_error}>
                                    {formik.status}
                                </div>
                                <div className={classes.form_field}>
                                    <FormikControl
                                        control='input'
                                        name='email'
                                        label='Email'
                                    />
                                </div>
                                <div className={classes.form_field}>
                                    <FormikControl
                                        control='input'
                                        name='password'
                                        label='Password'
                                        type='password'
                                        passhide='1'
                                    />
                                </div>
                                <div className={`${classes.form_field} ${classes.checkbox}`}>
                                    <FormikControl
                                        control='checkbox'
                                        name='rememberMe'
                                        options={rememberMeOption}
                                    />
                                </div>

                                {captchaURL && <img className={classes.captcha} src={captchaURL}/>}
                                {captchaURL &&
                                    <div className={classes.form_field}>
                                        <FormikControl
                                        control='input'
                                        name='captcha'
                                        />
                                    </div>
                                }

                                <button type="submit" disabled={!formik.isValid}>Log in</button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
};

const mapStateToProps = (state: AppStateType): MapStateProps => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL
})

export default compose(connect<MapStateProps, MapDispatchProps, null, AppStateType>(mapStateToProps, {login}))(Login)