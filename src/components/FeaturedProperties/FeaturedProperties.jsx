import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import "./FeaturedProperties.css"


const FeaturedProperties = () => {

    const imgArr = [
        "https://cf.bstatic.com/xdata/images/hotel/square600/34405073.webp?k=ca1663aa4fabefe87287d7385b6f2bb62d556220f3ba92248c411120a2f41118&o=&s=1",
        "https://cf.bstatic.com/xdata/images/hotel/square600/384643062.webp?k=74ddd283f549d32f30925871bc463b38c7c92562e34e245514a23f39ab13eaac&o=&s=1",
        "https://cf.bstatic.com/xdata/images/hotel/square600/212016985.webp?k=08c6b9842bfbe3be58d54ca27b477dcae97a3b92e5cacd946e9bb62a0eb8b78e&o=&s=1",
        "https://cf.bstatic.com/xdata/images/hotel/square600/90350673.webp?k=b4fd7114ab34978418bc61470904232cce9e1869bc9170419147e7004b11f155&o=&s=1",
    ]

    const { loading, error, data } = useFetch("/hotels?featured=true&limit=4")


    return (
        <div className='featuredProperties limitWidth'>
            {loading ?
                "Loading..." :
                data.map((item, idx) => (
                    <div className="fpItem" key={item.id}>
                        <div className="imageBox">
                            <img src={imgArr[idx]} alt={item.name} />
                            <div className="after"></div>
                        </div>
                        <h4 className="fpTitle">{item.name}</h4>
                        <p className='location'>{item.city}</p>
                        <p className='price'>Starting from: <span style={{ fontWeight: "lighter" }}>${parseFloat(item.cheapestPrice)}</span></p>
                        {item?.rating && <div className='fpRating'>
                            <span className='rating'>{item.rating}</span>
                            <p>Excellent</p>
                        </div>
                        }
                    </div>
                ))}
        </div>
    )
}

export default FeaturedProperties