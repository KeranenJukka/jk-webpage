import { createSlice } from '@reduxjs/toolkit'
import { textFI, textEN } from './text'

import {
    TextContentState
} from './types'

const initialState: TextContentState = {
    value: textFI,
    selectedLanguage: 'fi',
}

export const textContentSlice = createSlice({
    name: 'textContent',
    initialState,
    reducers: {
        changeFinnishText: (state) => {
            state.value = textFI
            state.selectedLanguage = 'fi'
        },
        changeEnglishText: (state) => {
            state.value = textEN
            state.selectedLanguage = 'en'
        }
    },
})

export const { changeFinnishText, changeEnglishText } = textContentSlice.actions

export default textContentSlice.reducer