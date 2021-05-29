import React, {useRef} from "react";
import {FormGroup, PortionTitle, UploadPhotoBtn, UploadPhotoInput} from "../styled";
import {FaCloudUploadAlt} from 'react-icons/fa'

const PhotoInfo = ({formData, handler}) => {
    const inputRef = useRef(null)
    const uploadBtnRef = useRef(null)

    const fileChangeHandler = (files) => {
        let file = files[0]
        let reader = new FileReader();
        reader.addEventListener('load', function () {
            uploadBtnRef.current.style.background = `url(${this.result}) top center no-repeat`;
            uploadBtnRef.current.style.backgroundSize = 'cover';
            uploadBtnRef.current.style.color = '#ffffff';
        })
        reader.readAsDataURL(file)
        handler(file, 'avatar')
    }

    return (
        <>
            <PortionTitle style={{textAlign: 'left'}}>You're almost <br/> done</PortionTitle>

            <FormGroup>
                <UploadPhotoInput type="file" ref={inputRef} onChange={(e) => fileChangeHandler(e.target.files)}/>

                <UploadPhotoBtn ref={uploadBtnRef} type="button" onClick={() => inputRef.current.click()}>
                    <FaCloudUploadAlt/>
                    Upload a photo
                </UploadPhotoBtn>
            </FormGroup>
        </>
    )
}

export default PhotoInfo