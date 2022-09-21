import { gsap } from 'gsap'

const windowPercentage: number = 0.8

export function animatePicture(image: any) {
    if ((window.pageYOffset + window.innerHeight * windowPercentage) >= image.current.offsetTop) {
        if (image.current.style.opacity === '0') {
            gsap.to(image.current, { right: '0px', duration: 1 })
            gsap.to(image.current, { opacity: 1, duration: 1 })
        }
    }
    else if ((window.pageYOffset + window.innerHeight * windowPercentage) < image.current.offsetTop) {
        if (image.current.style.opacity === '1') {
            gsap.to(image.current, { right: '-100px', duration: 0 })
            gsap.to(image.current, { opacity: 0, duration: 0 })
        }
    }
}