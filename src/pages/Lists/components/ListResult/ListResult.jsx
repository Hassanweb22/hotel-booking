import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./ListResult.css"

const ListResult = () => {

    const navigate = useNavigate()

    const data = [
        {
            title: "Austin David Hotel",
            rating: 8.9,
            price: 180,
            desc: "Located in Islamabad, within 22.5 km of Shah Faisal Mosque and 13 km of Ayūb National Park, Capri Inn Guest House provides accommodations with a restaurant as well as free private parking for guests who drive.",
            suggestion: "You can cancel later, so lock in this great price today!"
        },
        {
            title: "Austin David Hotel",
            rating: 8.9,
            price: 180,
            desc: "Located in Islamabad, within 22.5 km of Shah Faisal Mosque and 13 km of Ayūb National Park, Capri Inn Guest House provides accommodations with a restaurant as well as free private parking for guests who drive.",
            suggestion: "You can cancel later, so lock in this great price today!"
        },
        {
            title: "Austin David Hotel",
            rating: 8.9,
            price: 180,
            desc: "Located in Islamabad, within 22.5 km of Shah Faisal Mosque and 13 km of Ayūb National Park, Capri Inn Guest House provides accommodations with a restaurant as well as free private parking for guests who drive.",
            suggestion: "You can cancel later, so lock in this great price today!"
        },
        {
            title: "Austin David Hotel",
            rating: 8.9,
            price: 180,
            desc: "Located in Islamabad, within 22.5 km of Shah Faisal Mosque and 13 km of Ayūb National Park, Capri Inn Guest House provides accommodations with a restaurant as well as free private parking for guests who drive.",
            suggestion: "You can cancel later, so lock in this great price today!"
        },
        {
            title: "Austin David Hotel",
            rating: 8.9,
            price: 180,
            desc: "Located in Islamabad, within 22.5 km of Shah Faisal Mosque and 13 km of Ayūb National Park, Capri Inn Guest House provides accommodations with a restaurant as well as free private parking for guests who drive.",
            suggestion: "You can cancel later, so lock in this great price today!"
        },
        {
            title: "Austin David Hotel",
            rating: 8.9,
            price: 180,
            desc: "Located in Islamabad, within 22.5 km of Shah Faisal Mosque and 13 km of Ayūb National Park, Capri Inn Guest House provides accommodations with a restaurant as well as free private parking for guests who drive.",
            suggestion: "You can cancel later, so lock in this great price today!"
        },
        {
            title: "Austin David Hotel",
            rating: 8.9,
            price: 180,
            desc: "Located in Islamabad, within 22.5 km of Shah Faisal Mosque and 13 km of Ayūb National Park, Capri Inn Guest House provides accommodations with a restaurant as well as free private parking for guests who drive.",
            suggestion: "You can cancel later, so lock in this great price today!"
        },
    ]


    return (
        <div className='listResult'>
            {data.map(item =>
                <div className='lResultCard'>
                    <div className="cardImg">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/397865644.webp?k=3bf6c6478d878a833507195e8e666c91d9452bf56a9bfacb5030e944dc6f231c&o=&s=1" alt="hotel lazania" />
                    </div>
                    <div className="cardInfo">
                        <div className="cardLeft">
                            <h2 className="title">{item.title}</h2>
                            <p className='distance'>700m from the center</p>
                            <button className='free'>Free Airport Taxi</button>
                            <p className='exp'>Experience World-class Service</p>
                            <p className='desc'>{item.desc}</p>
                            <p className='cancel'>Free Cancellation</p>
                            <p className='suggestion'>{item.suggestion}</p>
                        </div>
                        <div className="cardRight">
                            <div className="rating">
                                <p className="rText">Excellent</p>
                                <span className="rBox">{item.rating}</span>
                            </div>
                            <div className='price_tax'>
                                <p className='price'>${item.price}</p>
                                <p className='taxDesc'>Included tax and fees</p>
                                <button
                                    onClick={() => navigate("/hotels/id")}
                                >
                                    see avilablity
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ListResult