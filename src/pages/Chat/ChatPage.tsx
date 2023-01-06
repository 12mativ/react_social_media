import TextArea from "antd/es/input/TextArea";
import React, {useEffect, useState} from "react";
import {Button, Typography} from "antd";
import {ChatMessageType} from "../../api/chat-api";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat/chat-reducer";
import {AppStateType} from "../../redux/redux-store";

const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat />
        </div>
    )
}

const Chat: React.FC = () => {
    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())

        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return (
        <div>
            {status === 'error' ? <Typography>Some error occurred. Please refresh the page.</Typography> :
                <>
                    <Messages />
                    <AddMessageForm />
                </>
            }
        </div>
    )
}

const Messages: React.FC = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)

    return (
        <div style={{height: '20rem', overflowY: 'auto'}}>
            {messages.map((m, index: number) => {return <Message message={m} key={index}/>})}
        </div>
    )
}

const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
    return (
        <div>
            <img src={message.photo} alt='user avatar'/>
            <Typography style={{fontWeight: 'bold'}}>
                {message.userName}
            </Typography>
            <br />
            <Typography>
                {message.message}
            </Typography>
            <hr />
        </div>


    )
}

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

    const sendMessageHandler = () => {
        if(!message) {
            return
        }

        dispatch(sendMessage(message))
        setMessage('')
    }

    return (
        <div>
            <TextArea rows={4} onChange={(e) => setMessage(e.currentTarget.value)} value={message}/>
            <Button onClick={sendMessageHandler} disabled={status !== 'ready'}>Send</Button>
        </div>
    )
}

export default ChatPage