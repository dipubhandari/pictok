
import { io } from './index.js'
const realTimeChat = () => {
    // all the user that connects to the socket store in this array
    let users = []
    // add user when user connected to socket
    const addUser = (userId, socketId) => {
        !users.some((user) => user.userId === userId) &&
            users.push({ userId, socketId });
        console.log(users)
    };
    // // find user to send particular user
    const getUser = (receiver) => {
        let socketid
        users.filter((item, id) => {
            if (item.userId === receiver) {
                console.log(item)
                socketid = item.socketId
            }
        })
        return socketid
    };


    const removeUser = (socketId) => {
        const newUsers = users.filter((user) => user.socketId !== socketId);
        users = newUsers
    };


    // // connection event emitter
    io.on("connection", (socket) => {

        // when user connected to chat
        socket.on("addUser", ({ senderId }) => {
            addUser(senderId, socket.id);
        });

        // when user sends message
        socket.on("message", ({ sender, receiver, message }) => {
            const socketId = getUser(receiver)
            if (socketId) {
                console.log(socketId)
                io.to(socketId).emit("getMessage", {
                    sender,
                    message,
                });
            }
        });
    })

}
export default realTimeChat