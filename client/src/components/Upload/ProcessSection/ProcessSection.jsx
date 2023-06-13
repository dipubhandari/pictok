import { IoMdCloudUpload } from 'react-icons/io'
import './ProcessSection.css'; import React from 'react'
import Header from '../../Header/Header'

const ProcessSection = () => {

    return (
        <div>
          

            <section className="uploadDiv">
               
                <div className="uploadInner uploadInnerProcess">
                <section className="imageArea">
                    Image Section
                </section>
                       <section className='processInstrction'> <h6 className='selectTitle'>Upload This Pic</h6>
                        <span className='uploadinstruction'>Drag and Drop the file</span>
                        <span className='uploadinstruction'>support jpeg,png,jpg file...</span>
                        <span className='uploadinstruction'>Less than 10mb</span>
                        <button className='uploadbutton'>Upload</button></section>
                </div>
            </section >
        </div >
    )
}
export default ProcessSection