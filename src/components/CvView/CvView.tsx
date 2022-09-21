import React from 'react'
import { useSelector } from 'react-redux'

import {
    RootState
} from '../../store'

import {
    CVContent
} from '../../redux/text/types'

import './CvView.scss'

export default function CvView(): JSX.Element {

    const textContent: {title: string, content: Array<CVContent>} = useSelector((state: RootState) => state.textContent.value.cv)

    const content: Array<JSX.Element> = textContent.content.map((text: CVContent, index: number) => {
        return (
            <div key={index} className='cv-block'>
                <p>{text.title}</p>
                <p>{text.year}</p>
                <p>{text.jobTitle}</p>
                <p>{text.description}</p>
            </div>
        )
    })

    return (
        <div id='cv-view'>
            <div className='text-content'>
                <h3>{textContent.title}</h3>

                {content}
            </div>
        </div>
    )
}

