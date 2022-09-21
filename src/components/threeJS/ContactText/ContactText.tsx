import React, { useRef, useEffect } from 'react'
import { Text3D } from '@react-three/drei'
import { gsap } from 'gsap'

import Roboto from '../../../fonts/Roboto_Bold.json'

export default function ContactText (): JSX.Element {
    const logo: any = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const offsetY: number = window.scrollY + window.innerHeight
            const positionZ: number = (document.body.clientHeight - offsetY) / 100

            if (positionZ < 10) {
                gsap.to(logo.current.position, { z: positionZ, duration: 1 })
            }

            if (positionZ >= 10 && logo.current.position.z < 10) {
                gsap.to(logo.current.position, { z: 10, duration: 1 })
            }
        })
    }, [])

    return (
        <mesh position={[0, 0, 10]} rotation={[0, 0, 0]} ref={logo}>
            {/* @ts-ignore */}
            <Text3D rotation={[0, -1, 0]} position={[-0.8, -2.1, -7, 0]} font={Roboto} bevelSegments={0}>
                {'Jes!'}
                <meshPhongMaterial color="gray" shininess={100} reflectivity={1} />
            </Text3D>
        </mesh>
    )
}
