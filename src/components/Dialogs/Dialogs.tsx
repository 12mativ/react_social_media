import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import {Form, Formik, FormikHelpers} from "formik";
import messageFormSchema from '../FormValidation/MessageFormSchema';
import {FormikControl} from "../Forms/FormikControl";
import {InitialStateType} from "../../redux/dialogs/dialogs-reducer";

interface DialogsProps {
    dialogsPage: InitialStateType
    sendMessage: (text: string) => void
}

const Dialogs: React.FC<DialogsProps> = ({dialogsPage, sendMessage}) => {
    let dialogsElements = dialogsPage.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>))
    let messagesElements = dialogsPage.messages.map(message => <Message message={message.message} key={message.id}/>)

    const setMessage = (text: string) => {
        sendMessage(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_elems}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
                <MessageForm setMessage={setMessage}/>
            </div>
        </div>
    );
}

type InitialValuesType = {
    message: string
}

const initialValues: InitialValuesType = {
    message: ''
}

type setMessageType = {
    setMessage: (text: string) => void
}

const MessageForm: React.FC<setMessageType> = ({setMessage}) => {
    const onSubmit = (values: InitialValuesType, actions: FormikHelpers<InitialValuesType>) => {
        actions.resetForm()
        setMessage(values.message)
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={messageFormSchema}
        >
            {
                formik => {
                    return (
                        <Form className={classes.message_field}>
                            <FormikControl
                                control='textarea'
                                name='message'
                                noError={true}
                                placeholder='Start typing'
                            />
                            <button
                                type='submit'
                                disabled={!formik.isValid}
                                className={`${classes.message_btn} btn`}
                            >
                                Send
                            </button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default Dialogs;
