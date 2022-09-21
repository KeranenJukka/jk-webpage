import React from 'react'
import { useSelector } from 'react-redux'

import {
    RootState
} from '../../store'

import './InterestsView.scss'

export default function InterestsView(): JSX.Element {

    const textContent: {title: string, content: string} = useSelector((state: RootState) => state.textContent.value.interests)

    return (
        <div id='interests-view'>
            <div className='text-content'>
                <h4>{textContent.title}</h4>
                <p>{textContent.content}</p>
            </div>
        </div>
    )
}