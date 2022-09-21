import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFinnishText, changeEnglishText } from '../../redux/text/textContentSlice'
import {
    RootState
} from '../../store'

import './ToggleLanguage.scss'

export default function ToggleLanguage(): JSX.Element {
    const language: 'en' | 'fi' = useSelector((state: RootState) => state.textContent.selectedLanguage)

    const dispatch = useDispatch()

    const changeToEngText = () => {
        dispatch(changeEnglishText())
    }

    const changeToFinText = () => {
        dispatch(changeFinnishText())
    }

    return (
        <div className='toggle-language'>
            <button className={language === 'en' ? 'selected' : ''} onClick={changeToEngText}>Eng</button>
            <button className={language === 'fi' ? 'selected' : ''} onClick={changeToFinText}>Fin</button>
        </div>
    )
}