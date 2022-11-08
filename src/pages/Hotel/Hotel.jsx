import React, { useState } from 'react'
import { MdLocationOn } from "react-icons/md"
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'
import "./Hotel.css"
import ImageModal from './components/ImageModal'

const Hotel = () => {

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
    ];

    const [slideNo, setSlideNo] = useState(null)
    const [openSlide, setOpenSlide] = useState(false)

    const handleOpenModal = (idx) => {
        setSlideNo(idx)
        setOpenSlide(true)
    }

    return (
        <div>
            <Navbar />
            <Header type="hotelList" />
            <div className="hotelContainer" style={{ overflow: openSlide ? "hidden" : "auto" }}>
                {openSlide &&
                    <ImageModal
                        slideNo={slideNo}
                        setSlideNo={setSlideNo}
                        openSlide={openSlide}
                        setOpenSlide={setOpenSlide}
                        photos={photos}
                    />
                }
                <div className="hotelWrapper limitWidth">
                    <div className="hTop">
                        <div className='hTopLeft'>
                            <h1 className="hTitle">Tower Street Apartments</h1>
                            <div className="hLocInfo">
                                <MdLocationOn />
                                <p> Elton St 125 New york</p>
                            </div>
                            <p className='hLocDistance'>Excellent location – 500m from center</p>
                            <p className='hPriceHighlight'>Book a stay over $114 at this property and get a free airport taxi</p>
                        </div>
                        <div className="hTopRight">
                            <button>Reserve or Book Now</button>
                        </div>
                    </div>
                    <div className="imageWrapper">
                        {photos.map(({ src }, idx) => (
                            <img key={src + idx} src={src} alt="hotels" onClick={() => handleOpenModal(idx)} />
                        ))}
                    </div>
                    <div className="hDetails">
                        <div className="hDetilsinfo">
                            <h2 className="hDetailsTitle">Experience World-class Service</h2>
                            <p className='hDetailsDesc'>Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                                Street Apartments has accommodations with air conditioning and
                                free WiFi. The units come with hardwood floors and feature a
                                fully equipped kitchenette with a microwave, a flat-screen TV,
                                and a private bathroom with shower and a hairdryer. A fridge is
                                also offered, as well as an electric tea pot and a coffee
                                machine. Popular points of interest near the apartment include
                                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                airport is John Paul II International Kraków–Balice, 16.1 km
                                from Tower Street Apartments, and the property offers a paid
                                airport shuttle service.</p>
                        </div>
                        <div className="hDetailsPrice">
                            <h3>Prfect for a 3-night stay</h3>
                            <p className='priceDetails'> Located in the real heart of Krakow, this property has an
                                excellent location score of 9.8!</p>
                            <p className='priceRoom'>$450 <span>(3 nights)</span></p>
                            <button className="reserve">Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <MailList />
            <Footer />
        </div>
    )
}

export default Hotel