import React from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import classes from "../Login/Login.module.css";
import {FormikControl} from "../Forms/FormikControl";
import usersSearchFormSchema from "../FormValidation/UsersSearchFormSchema";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/users/users-selectors";

type InitialValuesType = {
    searchName: string
    friendsOnly: boolean
}

interface UsersSearchProps {
    onSearchHandler: (term: string, friend: boolean) => void
}

export const UsersSearch: React.FC<UsersSearchProps> = ({onSearchHandler}) => {
    const filter = useSelector(getUsersFilter)
    const onSubmit = (values: InitialValuesType, action: FormikHelpers<InitialValuesType>) => {
        onSearchHandler(values.searchName, values.friendsOnly)
        action.setSubmitting(false)
    }
    return (
      <Formik
        enableReinitialize={true}
        initialValues={{searchName: filter.term, friendsOnly: filter.friendsOnly} as InitialValuesType}
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
                            <Field type="checkbox" name='friendsOnly' />
                            <label htmlFor="friendsOnly">Friends only</label>
                        </div>

                        <button type="submit" disabled={!formik.isValid}>Find</button>
                    </Form>
                  )
              }
          }
      </Formik>
    )
}