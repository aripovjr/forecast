import React, { useRef, useState } from 'react'
import style from './Forecast.module.css'
import { useDispatch } from 'react-redux'
import { start, success, fail } from './forecastSlice'
import axios from 'axios'

function InputCity() {
    const [cityName, setCityName] = useState('')
    const dispatch = useDispatch()

    const submitHandler = async (e) => {
        e.preventDefault()


        try {
            dispatch(start())
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=b3022c202021b1238a5a77e42a402c74`)
            dispatch(success(response.data))
        } catch (error) {
            dispatch(fail("City not found"))
        }

        setCityName('')
    }


    return (
        <form onSubmit={submitHandler} className={style.inputField}><h1>What country are you looking for</h1>
            <input value={cityName} onChange={(e) => setCityName(e.target.value)} type="text" placeholder='Enter city name' />
            <button type='submit'>Search</button>
        </form>
    )
}

export default InputCity