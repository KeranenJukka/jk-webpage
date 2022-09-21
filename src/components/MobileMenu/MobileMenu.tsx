import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import {
    RootState
} from '../../store'

import {
    NavigationMenuContent
} from '../../redux/text/types'

import './MobileMenu.scss'

export default function MobileMenu(): JSX.Element {
    const textContent: {title: string, content: NavigationMenuContent} = useSelector((state: RootState) => state.textContent.value.navigationMenu)

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const hamburger: any = useRef()
    const navigationMenu: any = useRef()
    const ul: any = useRef()

    const openMenu = () => {
        if (!menuOpen) {
            navigationMenu.current.style.height = '100vh'
            navigationMenu.current.style.width = '100%'
            hamburger.current.style.transform = 'rotate(-90deg)'
            ul.current.style.transitionDelay = '1s'
            ul.current.style.opacity = 1
        }

        else {
            navigationMenu.current.style.height = '0vh'
            navigationMenu.current.style.width = '0%'
            ul.current.style.transitionDelay = '0s'
            ul.current.style.opacity = 0
            hamburger.current.style.transform = 'rotate(0deg)'
        }
        setMenuOpen(!menuOpen)
    }

    return(
        <div className='mobile-menu'>
            <button ref={hamburger} onClick={openMenu} className='hamburger'>
                <div />
                <div />
                <div />
            </button>

            <div ref={navigationMenu} className='navigation-menu'>
                <ul ref={ul}>
                    <li><a onClick={openMenu} href="#front-page">{textContent.content.frontPage}</a></li>
                    <li><a onClick={openMenu} href="#me-view">{textContent.content.me}</a></li>
                    <li><a onClick={openMenu} href="#skills-view">{textContent.content.skills}</a></li>
                    <li><a onClick={openMenu} href="#cv-view">{textContent.content.cv}</a></li>
                    <li><a onClick={openMenu} href="#interests-view">{textContent.content.interests}</a></li>
                    <li><a onClick={openMenu} href="#contact-view">{textContent.content.contact}</a></li>
                </ul>
            </div>
        </div>
    )
}