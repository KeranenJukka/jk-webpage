import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

import './FrontPageView.scss'

export default function FrontPageView(): JSX.Element {
    
    const firstName: any = useRef()
    const lastName: any = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollY: number = window.scrollY

            if (scrollY < 1000) {
                gsap.to(firstName.current, { right: scrollY * 2, duration: 1.5 })
                gsap.to(lastName.current, { left: scrollY * 2, duration: 1.5 })
            }

            if (scrollY >= 1000 && firstName.current.style.right.replace('px', '') < 1000) {
                gsap.to(firstName.current, { right: 1000 * 2, duration: 1.5 })
                gsap.to(lastName.current, { left: 1000 * 2, duration: 1.5 })
            }
        })
    }, [])

    return (
        <div className='front-page-view'>
            <div className='front-page-title'>
                <div style={{ right: 0 }} ref={firstName} className='title'>
                    <h1>Jukka</h1>
                </div>

                <div style={{ left: 0 }} ref={lastName} className='title'>
                    <h1>Keränen</h1>
                </div>
            </div>
        </div>
    )
}