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

const Login = (props) => {
    const onSubmit = (values, action) => {
        props.login(values.email, values.password, values.rememberMe[0], action.setStatus)
        action.setSubmitting(false)
        action.resetForm()
        console.log(values)

    }

    if (props.isAuth) {
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

                                <button type="submit" disabled={!formik.isValid}>Submit</button>
                            </Form>
                        )
                    }
                }

            </Formik>
        </div>
    )
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)


// <div>
// <label htmlFor="email">Email</label>
// <Field
//     type="text"
//     id="email"
//     name="email"
// />
// <ErrorMessage name='email' />
// </div>
//
// <div>
//     <label htmlFor="password">Password</label>
//     <Field
//         type="text"
//         id="password"
//         name="password"
//     />
//     <ErrorMessage name='password' />
// </div>
//
// <div>
//     <Field
//         type="checkbox"
//         id="rememberMe"
//         name="rememberMe"
//     />
//     <label htmlFor="rememberMe">Remember me</label>
// </div>
// <button type="submit">Submit</button>