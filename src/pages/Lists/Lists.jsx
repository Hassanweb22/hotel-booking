import { add } from 'date-fns'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import ListResult from './components/ListResult/ListResult'
import ListSearch from './components/ListSearch/ListSearch'
import "./List.css"


const Lists = () => {
    const { state: locState } = useLocation()

    const [state, setState] = useState({
        destination: "",
        dates: [{
            startDate: new Date(),
            endDate: add(new Date(), { days: 1 }),
            key: 'selection'
        }]
    });

    const [options, setOptions] = useState({
        minPrice: 0,
        maxPrice: 0,
        adult: 0,
        children: 0,
        room: 0,
    })

    const hadnleOptionsChange = (e) => {
        let { name, value } = e.target
        setOptions(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div>
            <Navbar />
            <Header type="hotelList" />
            <div className="listContainer">
                <div className="listWrapper limitWidth">
                    <ListSearch
                        state={state}
                        setState={setState}
                        options={options}
                        setOptions={setOptions}
                        hadnleOptionsChange={hadnleOptionsChange}
                        locState={locState}
                    />
                    <div className="listResult">
                        <ListResult />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lists