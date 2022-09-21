import React, { useEffect, useRef } from 'react'
import mePicture from '../../pictures/mina2.jpg'

import {
    animatePicture
} from './utils'

import './MePictureView.scss'

export default function MePictureView(): JSX.Element {

    const image: any = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            animatePicture(image)
        })
    }, [])

    return (
        <div className='me-picture'>
            <img style={{ opacity: '0' }} ref={image} alt="Jukka Keränen" src={mePicture} />
        </div>
    )
}