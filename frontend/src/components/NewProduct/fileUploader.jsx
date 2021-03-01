import React, { useRef } from 'react'
import './newProduct.scss';

const FileUploader = ({ onFileSelectSuccess, onFileSelectError }) => {
    const fileInput = useRef(null)
    const handleFileInput = (e) => {
        const file = (e.target.files[0]);
        if (fileInput.size > 5120)
            onFileSelectError({ error: "File size cannot exeed more than 5MB" });
        else onFileSelectSuccess(file);

    }
    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} />
            <button onClick={e => fileInput.current && fileInput.current.click()} className="btn"></button>
        </div>
    )
}

export default FileUploader
