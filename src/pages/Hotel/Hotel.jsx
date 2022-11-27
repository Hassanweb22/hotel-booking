import React, { useState } from 'react'
import { MdLocationOn } from "react-icons/md"
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'
import "./Hotel.css"
import ImageModal from './components/ImageModal'
import useFetch from '../../hooks/useFetch'
import { useLocation, useParams } from 'react-router-dom'

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

    const params = useParams()
    const [slideNo, setSlideNo] = useState(null)
    const [openSlide, setOpenSlide] = useState(false)

    const handleOpenModal = (idx) => {
        setSlideNo(idx)
        setOpenSlide(true)
    }

    const { loading, error, data, fetchData } = useFetch(`/hotels/find/${params.id}`)



    return (
        <div>
            <Navbar />
            <Header type="hotelList" />
            <div className="hotelContainer" style={{ overflow: openSlide ? "hidden" : "auto" }}>
                {openSlide && data.photos &&
                    <ImageModal
                        slideNo={slideNo}
                        setSlideNo={setSlideNo}
                        openSlide={openSlide}
                        setOpenSlide={setOpenSlide}
                        photos={data.photos}
                    />
                }
                {loading && data ? "Loading..." :
                    <div className="hotelWrapper limitWidth">
                        <div className="hTop">
                            <div className='hTopLeft'>
                                <h1 className="hTitle">{data.name}</h1>
                                <div className="hLocInfo">
                                    <MdLocationOn />
                                    <p>{data.address}</p>
                                </div>
                                <p className='hLocDistance'>Excellent location – ${data.distance}m from center</p>
                                <p className='hPriceHighlight'>Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi</p>
                            </div>
                            <div className="hTopRight">
                                <button>Reserve or Book Now</button>
                            </div>
                        </div>
                        <div className="imageWrapper">
                            {data.photos?.map(({ src }, idx) => (
                                <img key={src + idx} src={src} alt="hotels" onClick={() => handleOpenModal(idx)} />
                            ))}
                        </div>
                        <div className="hDetails">
                            <div className="hDetilsinfo">
                                <h2 className="hDetailsTitle">{data.title}</h2>
                                <p className='hDetailsDesc'>{data.desc}</p>
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
                }
            </div>
            <MailList />
            <Footer />
        </div>
    )
}

export default Hotel