import React, { useRef, useEffect } from 'react'
import { Text3D } from '@react-three/drei'
import { gsap } from 'gsap'

import Roboto from '../../../fonts/Roboto_Bold.json'

export default function BackgroundLogo(): JSX.Element {
    const logo: any = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const rotation: number = window.scrollY / 200
            const positionZ: number = window.scrollY / 200

            if (positionZ < 7) {
                gsap.to(logo.current.position, { z: positionZ, duration: 1.5 })
                gsap.to(logo.current.rotation, { y: rotation, z: rotation, duration: 1.5 })
            }

            if (positionZ >= 7 && logo.current.position.z < 7) { 
                gsap.to(logo.current.position, { z: 7, duration: 1.5 })
            }
        })

        window.addEventListener('mousemove', (e: any) => {
            const positionZ = window.scrollY / 200

            if (positionZ < 7) {
                gsap.to(logo.current.rotation, { y: e.clientX / 2000 - window.innerWidth / 2000 / 2 })
                gsap.to(logo.current.rotation, { x: e.clientY / 2000 - window.innerHeight / 2000 / 2 })
            }
        })
    }, [])

    return (
        <mesh position={[0, 0, window.scrollY / 200]} rotation={[0, 0, 0]} ref={logo}>
            {/* @ts-ignore */}
            <Text3D rotation={[0, 0, 0]} position={[-0.97, -0.5, 0, 0]} font={Roboto} bevelSegments={0}>
                {'</>'}
                <meshPhongMaterial color="gray" shininess={100} reflectivity={1} />
            </Text3D>
        </mesh>
    )
}
