import React from 'react'
import Wrapper from './components/Wrapper/Wrapper'
import store from './store'
import { Provider } from 'react-redux'

function App (): JSX.Element {
    return (
        <Provider store={store}>
            <div className="App">
                <Wrapper />
            </div>
        </Provider>
    )
}

export default App
