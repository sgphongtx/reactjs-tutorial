import 'regenerator-runtime/runtime'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import rootSaga from 'core/redux/saga'
import rootReducer from 'core/redux/reducers'

const composeEnhancers =
    typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
        ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({ trace: true, traceLimit: 25 })
        : compose

const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(rootSaga)

export default store
