import { gsap } from 'gsap'

import {
    animateSkillBlocks
} from './utils'

jest.mock('gsap')

describe('animateSkillBlocks', () => {
    test('block appears', () => {
        const block = {
            current: {
                offsetTop: 2542,
                style: {
                    opacity: '0'
                }
            }
        }

        Object.defineProperty(window, 'pageYOffset', {
            value: 1700
        });
        Object.defineProperty(window, 'innerHeight', {
            value: 951
        });

        animateSkillBlocks(
            block,
            block,
            block,
            block,
        )
        expect(gsap.to).toHaveBeenCalledWith(block.current, { opacity: 1, duration: 1 });
    })

    test('block disappears', () => {
        const block = {
            current: {
                offsetTop: 2542,
                style: {
                    opacity: '1'
                }
            }
        }

        Object.defineProperty(window, 'pageYOffset', {
            value: 1500
        });
        Object.defineProperty(window, 'innerHeight', {
            value: 951
        });

        animateSkillBlocks(
            block,
            block,
            block,
            block,
        )
        expect(gsap.to).toHaveBeenCalledWith(block.current, { opacity: 0, duration: 0 })
    })
})