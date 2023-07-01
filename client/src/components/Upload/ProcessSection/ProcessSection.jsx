import { IoMdCloudUpload } from 'react-icons/io'
import './ProcessSection.css'; import React, { useEffect } from 'react'
import Header from '../../Header/Header'
import { Switch } from '@mui/material';

const ProcessSection = (props) => {
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
        console.log('hello world')

    }


    // handle change function details of the post
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        if (name == 'status') {
            setPostInfo({ ...postInfo, [name]: value })
        }
        console.log(postInfo)
        // converting hashtags into array
        if (name == 'hashtag') {
            const hashArray = value.split('#')
            console.log(hashArray)
            setPostInfo({ ...postInfo, [name]: hashArray })
        }
    }
    // post request when user clicked on upload button
    const postUser = () => {
        //POST REQUEST


        // response
    }
    useEffect(() => {
        console.log(props.file)
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