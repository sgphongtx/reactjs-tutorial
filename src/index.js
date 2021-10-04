import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'core/redux/store'
import { I18nextProvider } from 'react-i18next'
import i18next from 'assets/i18next'

import App from './App'

i18next.init({
    interpolation: { escapeValue: false }
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <I18nextProvider i18n={i18next}>
                <App />
            </I18nextProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
