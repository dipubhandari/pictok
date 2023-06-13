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
    return (
        <div>
            <Header/>
            {process && <UploadSection />}
            {upload && <ProcessSection />}
        </div >
    )
}
export default Upload