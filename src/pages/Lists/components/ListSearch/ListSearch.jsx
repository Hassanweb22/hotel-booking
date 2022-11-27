import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import "./ListSearch.css"

const ListSearch = ({
    state,
    setState,
    options,
    hadnleOptionsChange,
    fetchData
}) => {

    const [showDate, setShowDate] = useState(false)

    return (
        <div className="listSearch">
            <h2 className='listTitle'>Search</h2>
            <div className="listItem">
                <label htmlFor="dest">Destination</label>
                <input
                    id='dest'
                    type="text"
                    placeholder='Islambad'
                    value={state.destination}
                    onChange={e => setState({ ...state, destination: e.target.value })}
                />
            </div>
            <div className="listItem">
                <label htmlFor="checkIn" onClick={_ => setShowDate(true)}>Check-in-date</label>
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
                        minDate={new Date()}
                    />
                }
            </div>
            <div className='listItem'>
                <label htmlFor="option">Options</label>
                <div className='optionWrapper'>
                    <div className="optionItem">
                        <label htmlFor="minPrice">Min Price (per night)</label>
                        <input
                            name="minPrice"
                            type="number"
                            min={0}
                            value={options.minPrice}
                            onChange={hadnleOptionsChange}
                        />
                    </div>
                    <div className="optionItem">
                        <label htmlFor="maxPrice">Man Price (per night)</label>
                        <input
                            name="maxPrice"
                            type="number"
                            min={0}
                            value={options.maxPrice}
                            onChange={hadnleOptionsChange}
                        />
                    </div>
                    <div className="optionItem">
                        <label htmlFor="adult">Adult</label>
                        <input
                            name='adult'
                            type="number"
                            min={0}
                            value={options.adult}
                            onChange={hadnleOptionsChange}
                        />
                    </div>
                    <div className="optionItem">
                        <label htmlFor="children">Children</label>
                        <input
                            name='children'
                            type="number"
                            min={0}
                            value={options.children}
                            onChange={hadnleOptionsChange}
                        />
                    </div>
                    <div className="optionItem">
                        <label htmlFor="room">Room</label>
                        <input
                            name='room'
                            type="number"
                            min={0}
                            value={options.room}
                            onChange={hadnleOptionsChange}
                        />
                    </div>
                </div>
            </div>
            <div className='listItem'>
                <button onClick={_ => fetchData()}>Search</button>
            </div>
        </div>
    )
}

export default ListSearch