import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from './TextError'


export const Textarea = (props) => {
    const { label, name, noError, placeholder, ...rest } = props
    
    return (
        <>
            {label ? <label htmlFor={name}>{label}</label> : null}
            <Field as='textarea' placeholder={placeholder ? placeholder : null} id={name} name={name} {...rest} />
            {noError ?  null : <ErrorMessage name={name} component={TextError}/>}
        </>
    )
}