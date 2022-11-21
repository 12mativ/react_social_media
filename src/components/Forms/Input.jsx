import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from './TextError'
import PasswordShowHide from "./PasswordShowHide";


export const Input = (props) => {
    const {label, name, noError, passhide, ...rest} = props
    
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Field 
                id={name} 
                name={name} 
                {...rest} 
                autoComplete="on" 
                component={passhide ? PasswordShowHide : null}
            />
            {noError ?  null : <ErrorMessage name={name} component={TextError}/>}
        </>
    )
}

