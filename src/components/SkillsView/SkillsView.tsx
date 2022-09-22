import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
    animateSkillBlocks
} from './utils'

import {
    RootState
} from '../../store'

import './SkillsView.scss'

export default function SkillsView(): JSX.Element {

    const textContent: {title: string, content: Array<{title: string, content: string}>} = useSelector((state: RootState) => state.textContent.value.skills)

    // could not map these because refs stop working when user changes the language
    const block1: any = useRef()
    const block2: any = useRef()
    const block3: any = useRef()
    const block4: any = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            animateSkillBlocks(block1, block2, block3, block4)
        })
    }, [])

    return (
        <div id='skills-view'>
            <div className='text-wrapper'>
                <h2>{textContent.title}</h2>

                <div ref={block1} style={{ opacity: 1 }} className='skill-block'>
                    <p>{textContent.content[0].title}</p>
                    <p>{textContent.content[0].content}</p>
                    <a rel="noreferrer" target="_blank" href="https://github.com/KeranenJukka">https://github.com/KeranenJukka</a>
                </div>

                <div ref={block2} style={{ opacity: 1 }} className='skill-block'>
                    <p>{textContent.content[1].title}</p>
                    <p>{textContent.content[1].content}</p>
                </div>

                <div ref={block3} style={{ opacity: 1 }} className='skill-block'>
                    <p>{textContent.content[2].title}</p>
                    <p>{textContent.content[2].content}</p>
                </div>

                <div ref={block4} style={{ opacity: 1 }} className='skill-block'>
                    <p>{textContent.content[3].title}</p>
                    <p>{textContent.content[3].content}</p>
                </div>

            </div>
        </div>
    )
}