import React from 'react'
import "./Footer.css"
import img1 from "../../assets/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png"
import img2 from "../../assets/priceline.png"
import img3 from "../../assets/rentalcars.png"
import img4 from "../../assets/kayak.png"
import img5 from "../../assets/agoda.png"
import img6 from "../../assets/opentable.png"

const Footer = () => {

    const data = ["Countries", "Regions", "Cities", "Districts", "Airports", "Hotels", "Places of interest"]
    const imgArry = [img1, img2, img3, img4, img5, img6]

    return (
        <div className='footer'>
            <div className='fLists limitWidth'>
                {[...Array(5).keys()].map(key => (
                    <ul className="fList" key={key}>
                        {data.map((text, idx) => (
                            <li className='fListItem' key={text + idx}>{text}</li>
                        ))}
                    </ul>
                ))}
            </div>
            <ul className='imgList'>
                {imgArry.map(img => (
                    <li key={img}>
                        <img src={img} alt={"sponsors"} />
                    </li>
                ))}
            </ul>
            <p className='license'>Copyright © 1996–2022 Booking.com™. All rights reserved.</p>
        </div>
    )
}

export default Footer