import React from "react";
import {Form, Formik, FormikHelpers} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import {FormikControl} from "../Forms/FormikControl";
import classes from "./Login.module.css";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth/auth-reducer";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

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

export const LoginPage: React.FC = () => {
    const captchaURL = useSelector((state: AppStateType) => state.auth.captchaURL)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()


    const onSubmit = (values: InitialValuesType, action: FormikHelpers<InitialValuesType>) => {
        dispatch(login(values.email, values.password, values.rememberMe[0], values.captcha, action.setStatus))
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
}