import React from "react";
import {Form, Formik, FormikHelpers} from "formik";
import classes from "../Login/Login.module.css";
import {FormikControl} from "../Forms/FormikControl";
import usersSearchFormSchema from "../FormValidation/UsersSearchFormSchema";

type InitialValuesType = {
    searchName: string
    friendsOnly: Array<string | null>
}

const initialValues: InitialValuesType = {
    searchName: '',
    friendsOnly: [],
}

const onSubmit = (values: InitialValuesType, action: FormikHelpers<InitialValuesType>) => {
    //login(values.email, values.password, values.rememberMe[0], values.captcha, action.setStatus)
    console.log(values)
    action.setSubmitting(false)
    action.resetForm()
}

const friendsOnlyOption = [
    {key: 'Friends only', value: 'false'}
]

export const UsersSearch = () => {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={usersSearchFormSchema}
      >
          {
              formik => {
                  return (
                    <Form className={classes.form}>
                        <div className={classes.form_error}>
                            {formik.status}
                        </div>
                        <div>
                            <FormikControl
                              control='input'
                              name='searchName'
                              label='Users search'
                              noError={true}
                            />
                        </div>
                        <div>
                            <FormikControl
                              control='checkbox'
                              name='friendsOnly'
                              options={friendsOnlyOption}
                            />
                        </div>

                        <button type="submit" disabled={!formik.isValid}>Find</button>
                    </Form>
                  )
              }
          }
      </Formik>
    )
}