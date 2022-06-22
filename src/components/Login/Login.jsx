import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import axios from "axios";
import {Navigate} from "react-router-dom";

const initialValues = {
    email: '',
    password: '',
    rememberMe: false
}

const onSubmit = (values) => {
    axios.post('https://social-network.samuraijs.com/api/1.0/auth/login',
        {email:values.email, password: values.password, rememberMe: values.rememberMe}).then(response => {
                if(response.resultCode === 0) {
                    return <Navigate to={`/profile/${response.data.userId}`}/>
                }
            }
    )
}

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginFormSchema}>
                <Form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field
                            type="text"
                            id="email"
                            name="email"
                        />
                        <ErrorMessage name='email' />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <Field
                            type="text"
                            id="password"
                            name="password"
                        />
                        <ErrorMessage name='password' />
                    </div>

                    <div>
                        <Field
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
};

export default Login
