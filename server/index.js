import dbCon from "./database/dbcon.js"
import express from 'express'
import User_Model from './models/user.js'
import Chat_Model from './models/chat.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import { createServer } from "http";
import { Server } from "socket.io";
import realTimeChat from './socketChat.js'
const app = express()

const httpServer = createServer(app);
export const io = new Server(httpServer, {
    cors: {
        origin: "*",
    }
});
realTimeChat()
// required variables instances
const PORT = 5000
const DATABASE_URL = 'mongodb+srv://dipubhandari:.ComDipu@cluster0.va8aa0b.mongodb.net/test'

// database connection
dbCon(DATABASE_URL)

// middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: false }))
app.use(cors())


// *---------------message chat code --------------*//
// // ------------------//routes for creating users Api------------------//
// app.post('/chat', async (req, res) => {
//     try {
//         const msg = await Chat_Model.create(req.body)
//         res.send(msg)
//     }
//     catch (error) {
//         console.log(error)
//     }
// })


// *---------------message chat code --------------*//

// // ------------------//routes for creating users Api------------------//
// app.get('/users', async (req, res) => {
//     const user = await User_Model.find()
//     res.send(user)
// })
// ------------------//routes for deleting all users------------------//
// app.delete('/users', async (req, res) => {
//     const user = await User_Model.deleteMany()
//     res.send('All User deleted')
// })
// ------------------//routes for creating new account ------------------//
app.post('/create-account', async function (req, res) {
    try {
        // checking if the username and email is already exist
        const user = await User_Model.findOne({ email: req.body.email } || { username: req.body.username })
        if (!user) {
            console.log('Saved to the database')
            const enc_password = await bcrypt.hash(req.body.password, 10)
            const newUser = await User_Model.create({ username: req.body.username, email: req.body.email, password: enc_password, name: req.body.name })
            res.send({ msg: "Successfully created Account" })
            console.log('Created')
        }
        else {
            console.log('alreay exist'); res.send({ msg: "Email or username Already exist" })
        }
    }
    catch (error) {
        res.send({ msg: "SomethingWrong" })
    }

})   // ------------------//routes for Login with jwt ------------------//
app.post('/login', async function (req, res) {
    try {

        // checking if the username is already exist
        const user = await User_Model.findOne({ email: req.body.email })
        if (!user) {
            res.send({ msg: "Provide Correct Details" })
        }
        else {
            //  compare password and check
            const hash = await bcrypt.compare(req.body.password, user.password)
            if (hash) {
                const token = jwt.sign({ id: user._id }, 'secrete-key', { expiresIn: '10d' })
                user.token = token
                user.password = null
                res.send({ user: user, msg: "Login Successfull", token })
            }
            else {
                res.send({ msg: "Provide Correct Details" })

            }

        }
    } catch (error) {
        res.send({ msg: "Something Went wrong Try Again" })
    }

})
// listen
httpServer.listen(PORT, () => {
    console.log('App is running')
})