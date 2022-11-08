import React from 'react'
import Featured from '../../components/Featured/Featured'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MailList from '../../components/MailList/MailList'
import Navbar from '../../components/Navbar/Navbar'
import Properties from '../../components/Properties/Properties'
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className='homeContainer' >
                <Featured />
                <h4 className='homeTitle limitWidth'>Browse By Property Type</h4>
                <Properties />
                <h4 className='homeTitle limitWidth'>Home Guests Love</h4>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home