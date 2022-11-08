import React from 'react'
import "./FeaturedProperties.css"

const data = [
    { name: "Ibis Hotel", location: "Rio de janerio", rating: 9.2, price: 140, imgUrl: "https://cf.bstatic.com/xdata/images/hotel/square600/34405073.webp?k=ca1663aa4fabefe87287d7385b6f2bb62d556220f3ba92248c411120a2f41118&o=&s=1" },
    { name: "Luxury Apartments", location: "Rome", rating: 8.5, price: 100, imgUrl: "https://cf.bstatic.com/xdata/images/hotel/square600/384643062.webp?k=74ddd283f549d32f30925871bc463b38c7c92562e34e245514a23f39ab13eaac&o=&s=1" },
    { name: "Beautiful Martime", location: "Tokyo", price: 160, rating: 9.0, imgUrl: "https://cf.bstatic.com/xdata/images/hotel/square600/212016985.webp?k=08c6b9842bfbe3be58d54ca27b477dcae97a3b92e5cacd946e9bb62a0eb8b78e&o=&s=1" },
    { name: "Hotel Lacsania", location: "Helsinkey", price: 200, rating: 8.8, imgUrl: "https://cf.bstatic.com/xdata/images/hotel/square600/90350673.webp?k=b4fd7114ab34978418bc61470904232cce9e1869bc9170419147e7004b11f155&o=&s=1" },
    // { name: "cabins", total: "897,654", imgUrl: "https://q-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=" },
]

const FeaturedProperties = () => {


    return (
        <div className='featuredProperties limitWidth'>
            {data.map(item => (
                <div className="fpItem" key={item.name}>
                    <div className="imageBox">
                        <img src={item.imgUrl} alt={item.name} />
                        <div className="after"></div>
                    </div>
                    <h3 className="fpTitle">{item.name}</h3>
                    <p className='location'>{item.location}</p>
                    <p className='price'>Starting from ${parseFloat(item.price)}</p>
                    <div className='fpRating'>
                        <span className='rating'>{item.rating}</span>
                        <p>Excellent</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeaturedProperties