import express from 'express';
import PostController from '../controller/PostController.js';


const postRoutes = express.Router()

postRoutes.post('/user-post-content', PostController.post)


export default postRoutes