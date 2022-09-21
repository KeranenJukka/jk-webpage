import React from 'react';
import ToggleLanguage from './ToggleLanguage';
import { Provider } from 'react-redux'
import store from '../../store'
import { render, fireEvent, screen } from '@testing-library/react'

describe('ToggleLanguage', () => {
    test('renders correctly and changes language', async () => {
        render(
            <Provider store={store}>
                <ToggleLanguage />
            </Provider>
        )
        const fiButton = screen.getByText(/fin/i)
        expect(fiButton).toBeInTheDocument()
        expect(fiButton.className).toBe('selected')
    
        const engButton = screen.getByText(/eng/i)
        expect(engButton).toBeInTheDocument()
    
        await fireEvent.click(engButton)
        expect(engButton.className).toBe('selected')
    })    
})

