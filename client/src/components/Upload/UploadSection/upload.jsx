import { IoMdCloudUpload } from 'react-icons/io'
import './upload.css'; import React from 'react'
import Header from '../../Header/Header'
// import { useDispatch} from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { post } from '../../../redux/postSlice';

const UploadSection = (props) => {
    let file = {}
    const dispatch = useDispatch()
    const handleChange = (e) => {
        file = e.target.files[0]
     
            dispatch(post(true))
           props.getFile(file)
    }
    return (
        <div>
            <input
                name='file'
                type='file'
                style={{ display: 'none' }}
                onChange={handleChange}
                id='file' />
            {/* 
            <Header /> */}

            <section className="uploadDiv">
                <div className="uploadInner">
                    <label className="uploadarea" for='file'>  <span className='uploadicon'><IoMdCloudUpload /></span>
                        <h6 className='selectTitle'>Select Pic to upload</h6>
                        <span className='uploadinstruction'>Drag and Drop the file</span>
                        <span className='uploadinstruction'>support jpeg,png,jpg file...</span>
                        <span className='uploadinstruction'>Less than 10mb</span>
                        <button className='uploadbutton'>Select File</button></label>
                </div>
            </section >
        </div >
    )
}
export default UploadSection