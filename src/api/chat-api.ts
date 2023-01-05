let subscribers = [] as SubscriberType[]

let ws: WebSocket | null = null

const closeHandler = () => {
    console.log('CLOSE WS')
    setTimeout(createChannel, 3000)
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers.forEach(s => s(newMessages))
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
}

function createChannel() {
    cleanUp()
    ws?.close()

    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
}

export const chatApi = {
    start() {
        createChannel()
    },

    stop() {
        subscribers = []
        ws?.close()
        cleanUp()
    },

    subscribe(callback: SubscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },

    unsubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(s => s !== callback)
    },

    sendMessage(message: string) {
        ws?.send(message)
    }
}

export interface ChatMessageType {
    message: string
    photo: string
    userId: number
    userName: string
}

type SubscriberType = (messages: ChatMessageType[]) => void