import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import {
    RootState
} from '../../../store'

import './FeedbackBox.scss'

export default function FeedbackBox(): JSX.Element {
    const questId: string | null = useSelector((state: RootState) => state.questContent.questId)
    const textContent: string = useSelector((state: RootState) => state.textContent.value.contact.content.ratingText)

    const [rating, setRating] = useState<number|null>(null)

    const handleClick = (num: number) => {
        const host: any = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_URL : 'https://jukka-keranen-backend.herokuapp.com'
        const url: string = `${host}/api/quest?uuid=${questId}&rating=${num}`

        axios.put(url)
            .catch((err: any) => {
                console.log(err.message)
            })
        setRating(num)
    }

    return (
        <>
            {questId !== null && (
                <div className='feedback-box'>
                    <p>{textContent}</p>

                    <div className='rating-buttons'>
                        <button className={rating === 1 ? 'selected' : ''} onClick={() => {handleClick(1)}}>1</button>
                        <button className={rating === 2 ? 'selected' : ''} onClick={() => {handleClick(2)}}>2</button>
                        <button className={rating === 3 ? 'selected' : ''} onClick={() => {handleClick(3)}}>3</button>
                        <button className={rating === 4 ? 'selected' : ''} onClick={() => {handleClick(4)}}>4</button>
                        <button className={rating === 5 ? 'selected' : ''} onClick={() => {handleClick(5)}}>5</button>
                    </div>
                </div>
            )}
        </>
    )
}