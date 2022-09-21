import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import BackgroundLogo from '../BackgroundLogo/BackgroundLogo'
import ContactText from '../ContactText/ContactText'
import { PerspectiveCamera } from '@react-three/drei'

import './ThreeDeeBackgroundView.scss'

const Camera = (): JSX.Element => {
    const cameraZAxis: number = 4

    const camera: any = useRef()

    return (
        <>
            {/*@ts-ignore */}
            <PerspectiveCamera ref={camera} makeDefault position={[0, 0, cameraZAxis]} />
        </>
    )
}

export default function ThreeDeeBackgroundView(): JSX.Element {
    return (
        <div className='three-dee-background'>
            <Canvas>
                <Camera />

                <spotLight intensity={0.2} position={[-50, 0, 50]} angle={0.15} penumbra={1} />
                <ambientLight intensity={0.18} />

                <BackgroundLogo />
                <ContactText />
            </Canvas>
        </div>
    )
}
