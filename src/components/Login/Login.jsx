import React from "react";
import {Formik, Form} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import {FormikControl} from "../Forms/FormikControl";
import classes from "./Login.module.css";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const initialValues = {
    email: '',
    password: '',
    rememberMe: []
}

const rememberMeOption = [
    {key: 'Remember me', value: 'true'}
]

const Login = ({login, isAuth, captchaURL}) => {
    const onSubmit = (values, action) => {
        login(values.email, values.password, values.rememberMe[0], action.setStatus, values.captcha)
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

                                {captchaURL && <img src={captchaURL}/>}
                                {captchaURL &&
                                        <FormikControl
                                        control='input'
                                        name='captcha'
                                    />
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

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL
})

export default connect(mapStateToProps, {login})(Login)


//TODO null captcha