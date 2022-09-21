import { gsap } from 'gsap'

const windowHeightPercentage: number = 0.9

export function animateSkillBlocks (
    block1: any,
    block2: any,
    block3: any,
    block4: any
): void {    
    if (window.pageYOffset + window.innerHeight * windowHeightPercentage >= block1.current.offsetTop) {
        if (block1.current.style.opacity === '0') {
            gsap.to(block1.current, { opacity: 1, duration: 1 })
            gsap.to(block1.current, { top: 0, duration: 1 })
        }
    }
    else if (window.pageYOffset + window.innerHeight * windowHeightPercentage < block1.current.offsetTop) {
        if (block1.current.style.opacity === '1') {
            gsap.to(block1.current, { opacity: 0, duration: 0 })
            gsap.to(block1.current, { top: 100, duration: 0 })
        }
    }
    
    if (window.pageYOffset + window.innerHeight * windowHeightPercentage >= block2.current.offsetTop) {
        if (block2.current.style.opacity === '0') {
            gsap.to(block2.current, { opacity: 1, duration: 1 })
            gsap.to(block2.current, { top: 0, duration: 1 })
        }
    }
    else if (window.pageYOffset + window.innerHeight * windowHeightPercentage < block2.current.offsetTop) {
        if (block2.current.style.opacity === '1') {
            gsap.to(block2.current, { opacity: 0, duration: 0 })
            gsap.to(block2.current, { top: 100, duration: 0 })
        }
    }

    if (window.pageYOffset + window.innerHeight * windowHeightPercentage >= block3.current.offsetTop) {
        if (block3.current.style.opacity === '0') {
            gsap.to(block3.current, { opacity: 1, duration: 1 })
            gsap.to(block3.current, { top: 0, duration: 1 })
        }
    }
    else if (window.pageYOffset + window.innerHeight * windowHeightPercentage < block3.current.offsetTop) {
        if (block3.current.style.opacity === '1') {
            gsap.to(block3.current, { opacity: 0, duration: 0 })
            gsap.to(block3.current, { top: 100, duration: 0 })
        }
    }

    if (window.pageYOffset + window.innerHeight * windowHeightPercentage >= block4.current.offsetTop) {
        if (block4.current.style.opacity === '0') {
            gsap.to(block4.current, { opacity: 1, duration: 1 })
            gsap.to(block4.current, { top: 0, duration: 1 })
        }
    }
    else if (window.pageYOffset + window.innerHeight * windowHeightPercentage < block4.current.offsetTop) {
        if (block4.current.style.opacity === '1') {
            gsap.to(block4.current, { opacity: 0, duration: 0 })
            gsap.to(block4.current, { top: 100, duration: 0 })
        }
    }
}