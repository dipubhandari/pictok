import { IoMdCloudUpload } from 'react-icons/io'
import './upload.css'; import React from 'react'
import Header from '../../Header/Header'

const UploadSection = () => {

    return (
        <div>
            <input type='file' style={{ display: 'none' }} id='file' />
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