import mongoose from "mongoose"

const Post_Schema = new mongoose.Schema({
    user: { type: String, required: true },
    view: { type: Array },
    post: { type: String, required: true },
    status: { type: String },
    visibility: { type: String, default: 'public' },
    hashtag: { type: Array, default: [] },
    likes: { type: Array, default: [] },
    viewedBy: { type: Array, default: [] },
},
    { timestamps: true }
)

const Post_Model = mongoose.model('Posts', Post_Schema)

export default Post_Model