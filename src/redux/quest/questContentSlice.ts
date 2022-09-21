import { createSlice } from '@reduxjs/toolkit'

import {
    QuestContentState
} from './types'

const initialState: QuestContentState = {
    questId: null,
}

export const questContentSlice = createSlice({
    name: 'questInformation',
    initialState,
    reducers: {
        changeQuestId: (state, action) => {
            state.questId = action.payload
        },
    },
})

export const { changeQuestId } = questContentSlice.actions

export default questContentSlice.reducer