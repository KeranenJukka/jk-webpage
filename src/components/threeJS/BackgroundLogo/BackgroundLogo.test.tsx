import ReactThreeTestRenderer from '@react-three/test-renderer'
import BackgroundLogo from './BackgroundLogo'

//@ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true

describe('BackgroundLogo', () => {
    test('renders correctly', async () => {
        const renderer = await ReactThreeTestRenderer.create(<BackgroundLogo />)
        expect(renderer.scene.children.length).toBe(1)
    })
})
