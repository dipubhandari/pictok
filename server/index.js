import dbCon from "./database/dbcon.js"
import express from 'express'
import User_Model from './models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import { createServer } from "http";
import { Server } from "socket.io";
import realTimeChat from './socketChat.js'
import postRoutes from "./routes/postRoutes.js"
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


// routes

app.use('/api', postRoutes)

// ------------------//routes for creating new account ------------------//
app.post('/create-account', async function (req, res) {
    try {
        // checking if the username and email is already exist
        const user = await User_Model.findOne({ $or: [{ email: req.body.email }, { username: req.body.username }] })
        if (!user) {
            const enc_password = await bcrypt.hash(req.body.password, 10)
            const newUser = await User_Model.create({ username: req.body.username, email: req.body.email, password: enc_password, name: req.body.name })
            res.send({ success_msg: "Successfully created Account" })
        }
        else {
            console.log('alreay exist'); res.send({ error_msg: "Email or username Already exist" })
        }
    }
    catch (error) {
        res.send({ msg: "SomethingWrong" })
    }

})   // ------------------//routes for Login with jwt ------------------//
app.post('/login', async function (req, res) {
    try {
        console.log(req.body)
        // checking if the username is already exist
        const user = await User_Model.findOne({ $or: [{ email: req.body.login_token }, { username: req.body.login_token }] })
        console.log(user)
        if (!user) {
            res.send({ error_msg: "Provide Correct Details" })
        }
        else {
            //  compare password and check
            const hash = await bcrypt.compare(req.body.password, user.password)
            if (hash) {
                const token = jwt.sign({ id: user._id }, 'secrete-key', { expiresIn: '10d' })
                user.token = token
                user.password = null
                res.send({ user: user, success_msg: "Login Successfull", token })
            }
            else {
                res.send({ error_msg: "Provide Correct Details" })

            }

        }
    } catch (error) {
        res.send({ error_msg: "Something Went wrong Try Again" })
    }

})
// listen
httpServer.listen(PORT, () => {
    console.log('App is running')
})