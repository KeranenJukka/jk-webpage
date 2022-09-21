import React from 'react';
import MobileMenu from './MobileMenu';
import { Provider } from 'react-redux'
import store from '../../store'
import { render, fireEvent, screen } from '@testing-library/react'

describe('MobileMenu', () => {
    test('renders correctly and opens mobile menu', async () => {
        const { container } = render(
            <Provider store={store}>
                <MobileMenu />
            </Provider>
        )
        const hamburgerButton = screen.getByRole('button')
        await fireEvent.click(hamburgerButton)
    
        const link = screen.getByText(/Jukka/i)
        expect(link).toBeInTheDocument()
    
        const list = screen.getAllByRole('list')
        expect(list[0]).toHaveStyle('opacity: 1')
    
        const navigationMenu = container.getElementsByClassName('navigation-menu')
        expect(navigationMenu[0]).toHaveStyle('height: 100vh')
        expect(navigationMenu[0]).toHaveStyle('width: 100%')
    })
})

