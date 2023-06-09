import { useSelector } from 'react-redux'; import { serverURL } from '../server'
import { useEffect, useState } from 'react';
import './chat.css';
import { io } from 'socket.io-client'

function Chat(props) {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const CHAT = useSelector(state => state.chat.chatusername)
    const receiver = useSelector(state => state.chat.chatemail)
    const sender = useSelector(state => state.user.email)

    // useEffect(() => {
    //     const socket = io.connect("http://localhost:5000")

    // }, [])
    async function sendMessage() {
        const socket = io.connect("http://localhost:5000")

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sender: sender, receiver, message })
        };
        // saving message to the db
        await fetch(`${serverURL}/chat`, requestOptions)
        socket.emit('message', { sender, receiver, message })

    }
    
    // fetching all the messages 
    useEffect(() => {

        async function messages() {
           
            const msg = await fetch(`${serverURL}/messages?sender=${sender}&&receiver=${receiver}`)
                .then(res => res.text())
                .then(text => {
                    const msg = (JSON.parse(text))
                    setMessages(msg)
                });
        }
        messages();
    }, [])
    useEffect(() => {
    const socket = io.connect("http://localhost:5000")

        socket.on('getMessage', (payload) => {
            console.log(payload)
            alert('you got a new message')
            // setMessages((prev) => [...prev, { createdAt: Date.now(), sender: receiver.email, receiver: sender.email, message: payload.message }])
        })

    })
    

    return (
        <div className="chatContainer">

            <div className="chatsection">
                <div className="title">
                    <h2>CHATTING NOW WITH {CHAT} </h2>
                    <div className="messages">

                        {
                            messages.map((item, id) => {
                                return <div className={(item.sender == sender) ? 'sender' : 'receiver'}>
                                    <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="" />
                                    <span className="msgtahu">  <span>{item.message}<span className="messageTime">70 years</span></span>
                                        <span className='sendername'> {(item.sender == sender) ? 'You' : CHAT}</span></span>

                                </div>

                            })
                        }

                    </div>


                    <div className="sendfield">
                        <input type="text" name='message' onChange={(e) => setMessage(e.target.value)} placeholder='Type a message' />
                        <input type="submit" value='Send Message' onClick={sendMessage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;


