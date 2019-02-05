import React from 'react'
import { render } from 'react-dom'
import './assets/scss/style.scss'

const App = () => (
    <section className="M--app">
        <div className="container">
            <h1 className="app__welcome-message">Learn Webpack!!</h1>
        </div>
    </section>
)

render(
    <App />,
    document.getElementById('page')
)