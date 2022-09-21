import { configureStore } from '@reduxjs/toolkit'
import textReducer from './redux/text/textContentSlice'
import questReducer from './redux/quest/questContentSlice'

const store = configureStore({
    reducer: {
        textContent: textReducer,
        questContent: questReducer
    },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch