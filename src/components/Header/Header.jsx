import React, { useState } from 'react'
import "./Header.css"
import { FaBed, FaPlane, FaTaxi, FaCalendar, FaMale } from 'react-icons/fa';
import { DateRange } from 'react-date-range';
import { add, format } from 'date-fns';
import { useNavigate } from 'react-router-dom';


const Header = ({ type }) => {
    const navigate = useNavigate()
    const [showDate, setShowDate] = useState(false)
    const [showCounter, setShowCounter] = useState(false)

    const [options, setOptions] = useState({
        adult: 0,
        children: 0,
        room: 0
    })

    const [state, setState] = useState({
        destination: "",
        dates: [{
            startDate: new Date(),
            endDate: add(new Date(), { days: 1 }),
            key: 'selection'
        }]
    });

    const hadnleOptionsChange = (name, sign) => {
        setOptions(prev => {
            return { ...prev, [name]: sign === "i" ? options[name] + 1 : options[name] - 1 }
        })
    }

    const handleSave = () => {
        console.log({ stateData: state, options })
        let data = { state, options }
        navigate("/hotels", { state: data })
    }

    return (
        <div className='header'>
            <div className={`headerContainer limitWidth ${type === "hotelList" ? "lessMargin" : ""}`}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FaBed />
                        <span>stays</span>
                    </div>
                    <div className="headerListItem">
                        <FaPlane />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FaTaxi />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FaBed />
                        <span>attraction</span>
                    </div>
                    <div className="headerListItem">
                        <FaTaxi />
                        <span>airport taxis</span>
                    </div>
                </div>
                {type !== "hotelList" &&
                    <>
                        <div className='headerInfo'>
                            <h1>A lifetime of disscounts? it's Genius.</h1>
                            <p> Get rewarded for your travels – unlock instant savings of 10% or
                                more with a free Lamabooking account</p>
                            <button className="headerBtn">Sign in / Register</button>
                        </div>
                        <div className='haederSearch'>
                            <div className="headerSerchItem">
                                <FaBed />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    value={state.destination}
                                    onChange={e => setState({ ...state, destination: e.target.value })}
                                />
                            </div>
                            <div className="headerSerchItem">
                                <FaCalendar />
                                <span
                                    onClick={_ => setShowDate(prev => !prev)}
                                    className="handleSearchText"
                                >
                                    {format(state.dates[0].startDate, "dd/MM/yyyy")} <b>to</b> {format(state.dates[0].endDate, "dd/MM/yyyy")}
                                </span>
                                {showDate &&
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setState({ ...state, dates: [item.selection] })}
                                        moveRangeOnFirstSelection={false}
                                        onRangeFocusChange={(rangeArr) => rangeArr[1] === 0 && setShowDate(false)}
                                        ranges={state.dates}
                                        className="dateRange"
                                    />
                                }
                            </div>
                            <div className="headerSerchItem">
                                <FaMale />
                                <span
                                    onClick={_ => setShowCounter(prev => !prev)}
                                    className="handleSearchText"
                                >
                                    {`${options.adult}:adult ${options.children}:children ${options.room}:room`}
                                </span>
                                {showCounter &&
                                    <div className='options'>
                                        <div className="optionsItem">
                                            <p>Adult</p>
                                            <div className='optionsCounter'>
                                                <button
                                                    disabled={options.adult <= 1}
                                                    onClick={_ => hadnleOptionsChange("adult", "d")}
                                                >
                                                    -
                                                </button>
                                                <span>{options.adult}</span>
                                                <button
                                                    disabled={options.adult >= 12}
                                                    onClick={_ => hadnleOptionsChange("adult", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionsItem">
                                            <p>Children</p>
                                            <div className='optionsCounter'>
                                                <button
                                                    disabled={options.children <= 0}
                                                    onClick={_ => hadnleOptionsChange("children", "d")}
                                                >
                                                    -
                                                </button>
                                                <span>{options.children}</span>
                                                <button
                                                    disabled={options.children >= 15}
                                                    onClick={_ => hadnleOptionsChange("children", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionsItem">
                                            <p>Room</p>
                                            <div className='optionsCounter'>
                                                <button
                                                    disabled={options.room <= 1}
                                                    onClick={_ => hadnleOptionsChange("room", "d")}
                                                >
                                                    -
                                                </button>
                                                <span>{options.room}</span>
                                                <button
                                                    disabled={options.room >= 10}
                                                    onClick={_ => hadnleOptionsChange("room", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>}
                            </div>
                            <div className="headerSerchItem">
                                <button className="searchBtn" onClick={handleSave}>Search</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header