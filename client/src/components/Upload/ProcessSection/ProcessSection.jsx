import { IoMdCloudUpload } from 'react-icons/io'
import './ProcessSection.css'; import React, { useEffect } from 'react'
import Header from '../../Header/Header'
import { Switch } from '@mui/material';
import { useSelector } from 'react-redux'
import {serverURL} from '../../../server'
const ProcessSection = (props) => {
    const user = useSelector(state => state.user.id)
    let [visibility, setShow] = React.useState(true);
    // state for the data of user post
    const [postInfo, setPostInfo] = React.useState({
        user: '',
        status: '',
        visibility: (visibility) ? 'public' : 'private',
        content: '',
        hashtag: []
    })


    // handle visiblity change
    const handleVisibility = () => {
        setShow(!visibility)
        setPostInfo({ ...postInfo, visibility: !visibility ? 'public' : 'private', })
    }


    // handle change function details of the post
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name == 'status') {
            setPostInfo({ ...postInfo, [name]: value })
        }

        // converting hashtags into array
        if (name == 'hashtag') {
            const hashArray = value.split('#')
            setPostInfo({ ...postInfo, [name]: hashArray })
        }
    }
    // post request when user clicked on upload button
    const postUser = async () => {
        //POST REQUEST
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postInfo)
        };
        // const response = await fetch(`${serverURL}/create-account`, requestOptions)
        const uploadRequest = await fetch(`${serverURL}/user-post-content`, requestOptions)
        
        console.log(postInfo)
        // response
    }
    useEffect(() => {
        // setting up the file from uploadsection in content keyword
        setPostInfo({ ...postInfo, content: props.file, user: user })
        // console.log(user)
    }, [])
    return (
        <div>


            <section className="uploadDiv">

                <div className="uploadInner uploadInnerProcess">
                    <section className="imageArea">
                        <img
                            className='imageArea' src="https://thumbs.gfycat.com/LimitedShamelessConure.webp" alt="" />

                    </section>
                    <section className='processInstrction'> <h6 className='selectTitle'>Upload This Pic</h6>
                        <textarea
                            type='text'
                            name='status'
                            placeholder='Write the status'
                            className='post_description'
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            placeholder='Hashtag'
                            className='hashtag'
                            onChange={handleChange}
                            name='hashtag'
                        />

                        <span>Private   <Switch
                            onClick={handleVisibility} checked={visibility} name="antoine" /> Public</span>
                        <span className='uploadinstruction'>By uploading this content you are agreegin our terms and policies.</span>

                        <button
                            onClick={postUser} className='uploadbutton'>Upload</button></section>
                </div>
            </section >
        </div >
    )
}
export default ProcessSection