import { add } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import useFetch from '../../hooks/useFetch'
import ListResult from './components/ListResult/ListResult'
import ListSearch from './components/ListSearch/ListSearch'
import "./List.css"


const Lists = () => {
    const { state: locState } = useLocation()

    const initialState = {
        destination: "",
        dates: [{
            startDate: new Date(),
            endDate: add(new Date(), { days: 1 }),
            key: 'selection'
        }]
    }
    const [state, setState] = useState(locState?.state ? locState.state : initialState);

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

    useEffect(() => {
        if (locState) {
            setState(prev => ({ ...prev, ...locState.state }))
            setOptions(prev => ({ ...prev, ...locState.options }))
        }
    }, [locState])

    const { loading, error, data, fetchData } = useFetch(`/hotels?city=${state?.destination}&min=${options.minPrice}&max=${options.maxPrice}`)


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
                        fetchData={fetchData}
                    />
                    <div className="listResult">
                        {loading ? "Loading..." :
                            <ListResult
                                data={data}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lists