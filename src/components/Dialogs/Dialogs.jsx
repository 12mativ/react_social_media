import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import {Form, Formik} from "formik";
import messageFormSchema from '../FormValidation/MessageFormSchema';
import {FormikControl} from "../Forms/FormikControl";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>))
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id}/>)

    const setMessage = (text) => {
        props.sendMessage(text);
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

const initialValues = {
    message: ''
}


// const onSubmit = (values, actions) => {
//     actions.resetForm()
//     console.log(values)
// }

// написал onSubmit внутри самой компоненты формы, пока не знаю, будет ли это проблемой
// если будет, то просто вынеси onSubmit за компоненту
// а к кнопке добавь onClick={()=>{setMessage(formik.values.message)}}

const MessageForm = (props) => {
    const onSubmit = (values, actions) => {
        actions.resetForm()
        console.log(values)
        props.setMessage(values.message)
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
                            <button type='submit' disabled={!formik.isValid}>Send</button>


                            {/*<div className={classes.message_field_form}>*/}
                            {/*    <Field*/}
                            {/*        as='textarea'*/}
                            {/*        type="text"*/}
                            {/*        id="message"*/}
                            {/*        name="message"*/}
                            {/*        placeholder="Start typing"*/}
                            {/*    />*/}

                            {/*    <button type='submit'>Send</button>*/}
                            {/*</div>*/}

                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default Dialogs;
