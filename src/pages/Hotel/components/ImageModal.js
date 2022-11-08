import React from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import { MdCancel, MdArrowLeft, MdArrowRight } from "react-icons/md"
import "./Modal.css"

const ImageModal = ({
    slideNo,
    setSlideNo,
    openSlide,
    setOpenSlide,
    photos
}) => {

    const handleSlideNo = (direction) => {
        setSlideNo(prevNo =>
            direction === "l" ? (prevNo === 0 ? photos.length - 1 : prevNo - 1)
                : prevNo === photos.length - 1 ? 0 : prevNo + 1
        )
    }

    const handleClose = (slideNo) => {
        console.log("working close")
        setSlideNo(null)
        setOpenSlide(null)
    }

    return (
        <div className="sliderContainer">
            <MdCancel className="close" onClick={handleClose} />
            <BsFillArrowLeftCircleFill className='left' onClick={() => handleSlideNo("l")} />
            <div className="sliderWrapper">
                <img className="modal-content" id="img01" src={photos[slideNo].src} />
            </div>
            <BsFillArrowRightCircleFill className='right' onClick={() => handleSlideNo("r")} />
        </div>
    )
}

export default ImageModal