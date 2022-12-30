import React from "react";
import {Formik, Form, Field, FormikHelpers} from "formik";
import classes from "./ProfileInfo.module.css";
import {FormikControl} from "../../Forms/FormikControl";
import {clsx} from "clsx";
import {ProfileType} from "../../../types/types";

type ProfileDataFormType = {
    profile: ProfileType
    saveProfile: any
    deactivateEditMode: () => void
}

export const ProfileDataForm: React.FC<ProfileDataFormType> = ({profile, saveProfile, deactivateEditMode}) => {
    type InitialValuesType = typeof initialValues
    const initialValues = {
        userId: profile.userId,
        fullName: profile.fullName || '',
        aboutMe: profile.aboutMe || '',
        lookingForAJob: profile.lookingForAJob,
        lookingForAJobDescription: profile.lookingForAJobDescription || '',
        contacts: {
            facebook: profile.contacts['facebook'] || '',
            website: profile.contacts['website'] || '',
            vk: profile.contacts['vk'] || '',
            twitter: profile.contacts['twitter'] || '',
            instagram: profile.contacts['instagram'] || '',
            youtube: profile.contacts['youtube'] || '',
            github: profile.contacts['github'] || '',
            mainLink: profile.contacts['mainLink'] || '',
        }
    }

    const onSubmit = async (values: InitialValuesType, action: FormikHelpers<InitialValuesType>) => {
        await saveProfile(values, action.setStatus)
        deactivateEditMode()
        action.setSubmitting(false)

        action.setSubmitting(false)
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <Form className={classes.edit_form}>
                            <button
                                type='submit'
                                disabled={formik.isSubmitting}
                                className={clsx('btn', classes.save_changes_btn)}

                            >
                                Save changes
                            </button>
                            <div className={classes.form_error}>
                                {formik.status}
                            </div>
                            <div className={classes.description_block}>
                                <h2>Full name:</h2>
                                <FormikControl
                                    control='input'
                                    name='fullName'
                                />
                            </div>
                            <div className={classes.description_block}>
                                <h2>About me:</h2>
                                <FormikControl
                                    control='textarea'
                                    name='aboutMe'
                                />
                            </div>

                            <div className={classes.description_block}>
                                <h2>Looking for a job</h2>
                                <Field type="checkbox" name='lookingForAJob' />
                            </div>


                            <div className={classes.description_block}>
                                <h2>Skills description: </h2>
                                <FormikControl
                                    control='textarea'
                                    name='lookingForAJobDescription'
                                />
                            </div>

                            <div className={classes.description_block}>
                                <h2>Contacts</h2>
                                {Object.keys(profile.contacts).map(key => {
                                    return (
                                        <div key={key} className={classes.contacts_block}>
                                            <h3 className={classes.contact_name}>{key}</h3>
                                            <FormikControl
                                                control='input'
                                                name={'contacts.' + key}/>
                                        </div>
                                    )
                                })}
                            </div>

                        </Form>
                    )
                }
            }
        </Formik>
    )
}