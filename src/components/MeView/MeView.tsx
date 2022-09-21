import React from 'react'
import { useSelector } from 'react-redux'
import {
    RootState
} from '../../store'

import mePicture from '../../pictures/mina.jpg'

import './MeView.scss'

export default function MeView(): JSX.Element {

    const meText: string = useSelector((state: RootState) => state.textContent.value.me.content)

    return (
        <div id='me-view'>
            <div className='content'>
                <p>{meText}</p>
                <img alt="Jukka Keränen" src={mePicture}></img>
            </div>
        </div>
    )
}