import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from './TextError';

export const CheckboxGroup = (props) => {
    const {label, name, options, ...rest} = props
    return (
        <>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input 
                                        type='checkbox' 
                                        id={option.value.toString()}
                                        {...field} 
                                        value={option.value}
                                        checked={Boolean(field.value.includes(option.value.toString()))}
                                    />
                                    <label htmlFor={option.value.toString()}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </>
    )
}