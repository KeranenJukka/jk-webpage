import React from 'react'
import { useSelector } from 'react-redux'
import FeedbackBox from './FeedbackBox/FeedbackBox'

import {
    ContactContent
} from '../../redux/text/types'

import {
    RootState
} from '../../store'

import './ContactView.scss'

export default function ContactView(): JSX.Element {

    const textContent: {title: string, content: ContactContent} = useSelector((state: RootState) => state.textContent.value.contact)

    return (
        <div id='contact-view'>
            <div className='text-content'>
                <h5>{textContent.title}</h5>
                <p>{textContent.content.email}</p>
                <p>{textContent.content.phone}</p>

                <FeedbackBox />
            </div>
        </div>
    )
}