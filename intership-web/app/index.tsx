import 'bootstrap/dist/css/bootstrap.min.css'
import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './App/App'
import { appStore, history } from './Store/Store'
// import { LogInForm } from './components/login'

ReactDOM.render(
    <Provider store={appStore}>
        <ConnectedRouter history={history}>
            {/* <LogInForm />, */}
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
