import { useEffect, useState } from 'react'
import axios from '../utils/axios'

const useFetch = (url) => {

    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        setLoading(true)
        try {
            const data = await axios.get(url)
            setData(data.data)
            setError("")
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return { loading, error, data, fetchData }

}

export default useFetch
