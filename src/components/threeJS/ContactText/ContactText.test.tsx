import ReactThreeTestRenderer from '@react-three/test-renderer'
import ContactText from './ContactText'

//@ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true

test('renders correctly', async () => {
    const renderer = await ReactThreeTestRenderer.create(<ContactText />)
    expect(renderer.scene.children.length).toBe(1)
})
