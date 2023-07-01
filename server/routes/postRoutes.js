import express from 'express';
import PostController from '../controller/PostController.js';
import { upload } from '../middleware/fileupload.js'

const postRoutes = express.Router()

postRoutes.post('/user-post-content', upload.single('content'), PostController.uploadContent)


export default postRoutes