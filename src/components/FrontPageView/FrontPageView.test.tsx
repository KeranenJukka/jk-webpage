import React from 'react';
import FrontPageView from './FrontPageView';
import { render, screen } from '@testing-library/react'

describe('FrontPageView', () => {
    test('renders correctly', () => {
        const { container } = render(
            <div className='wrapper' style={{ height: '4500px', width: '1500px' }}>
                <FrontPageView />
            </div>
        )
    
        const titleText1 = screen.getByText(/Jukka/i)
        expect(titleText1).toBeInTheDocument()
    
        const titleText2 = screen.getByText(/Keränen/i)
        expect(titleText2).toBeInTheDocument()
    
        const titleCOntainers = container.getElementsByClassName('title')
        expect(titleCOntainers[0]).toHaveStyle('right: 0')
        expect(titleCOntainers[1]).toHaveStyle('left: 0')
    })
})
