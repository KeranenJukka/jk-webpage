import React from 'react';
import FeedbackBox from './FeedbackBox';
import { Provider, useDispatch } from 'react-redux'
import store from '../../../store'
import { render, fireEvent, screen } from '@testing-library/react'
import axios from 'axios'

import {
    changeQuestId
} from '../../../redux/quest/questContentSlice'

jest.mock('axios')

describe('FeedBackBox', () => {
    test('component appears and sends axios request', async () => {

        function TheBox(): JSX.Element {
            const dispatch = useDispatch()
            dispatch(changeQuestId(1))

            return (
                <FeedbackBox />
            )
        }

        function Wrapper (): JSX.Element {
            return (
                <Provider store={store}>
                    <TheBox />
                </Provider>
            )
        }

        render(
            <Wrapper />
        )

        //@ts-ignore
        axios.put.mockResolvedValue('rating added')

        const button = await screen.findByText(/5/i)
        await fireEvent.click(button)
        await expect(axios.put).toBeCalled()
    })
    
})
