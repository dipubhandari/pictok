import { IoMdCloudUpload } from 'react-icons/io'
import { useState } from 'react';
import './upload.css'; import React from 'react'
import Header from '../../components/Header/Header'
import UploadSection from '../../components/Upload/UploadSection/upload'
import ProcessSection from '../../components/Upload/ProcessSection/ProcessSection';
const Upload = () => {
    // state to show hide upload section or process section
    const [process, setProcess] = useState(false)
    const [upload, setUpload] = useState(true)
    const [file, setFile] = useState('')

    
    // getting the uploaded file from component
    const getUploadedFile = (file) => {
        if (file) {
            setProcess(true)
            setUpload(false)
            setFile(file)
        }
    }

    return (
        <div>
            <Header />
            {upload && <UploadSection getFile={getUploadedFile} />}
            {process && <ProcessSection file={file} />}
        </div >
    )
}
export default Upload