import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import axios from 'axios'

import MobileMenu from '../MobileMenu/MobileMenu'
import ThreeDeeBackgroundView from '../threeJS/ThreeDeeBackgroundView/ThreeDeeBackgroundView'
import FrontPageView from '../FrontPageView/FrontPageView'
import MeView from '../MeView/MeView'
import ToggleLanguage from '../ToggleLanguage/ToggleLanguage'
import SkillsView from '../SkillsView/SkillsView'
import MePictureView from '../MePictureView/MePictureView'
import CvView from '../CvView/CvView'
import InterestsView from '../InterestsView/InterestsView'
import ContactView from '../ContactView/ContactView'

import {
    changeQuestId
} from '../../redux/quest/questContentSlice'

import './Wrapper.scss'

export default function Wrapper(): JSX.Element {
    const dispatch = useDispatch()

    useEffect(() => {
        const host: any = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_URL : 'https://jukka-keranen-backend.herokuapp.com'
        const url: string = `${host}/api/quest`

        axios.post(url)
            .then((res: any) => {
                dispatch(changeQuestId(res.data))
            })
            .catch((err: any) => {
                console.log(err.message)
            })
    }, [dispatch])

    return (
        <div className='wrapper'>
            <ToggleLanguage />

            <MobileMenu />

            <ThreeDeeBackgroundView />
            <FrontPageView />

            <div id='front-page' />
            <div className='empty-box-2' />

            <MeView />
            <SkillsView />

            <MePictureView />
            <CvView />

            <InterestsView />
            <ContactView />
        </div>
    )
}
