import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { privateRoutes, publicRoutes, publicPaths, privatePaths } from 'app/config/routes'
import { HOME } from 'app/const/Routes'

import PrivateRoute from 'app/components/routes/PrivateRoute'
import ErrorBoundary from 'app/components/error'
import MainLayout from 'app/layouts/MainLayout'
import AuthLayout from 'app/layouts/AuthLayout'
import Home from 'app/modules/home'
// import ErrorPage from 'app/modules/error';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={privatePaths}>
                    <MainLayout>
                        <Switch>
                            {privateRoutes.map(route => (
                                <Route {...route} />
                            ))}
                        </Switch>
                    </MainLayout>
                </Route>
                <Route exact path={[HOME]}>
                    <PrivateRoute component={Home} path={HOME} exact />
                </Route>
                <Route exact path={publicPaths}>
                    <AuthLayout>
                        <Switch>
                            {publicRoutes.map(route => (
                                <Route {...route} />
                            ))}
                        </Switch>
                    </AuthLayout>
                </Route>
                {/* <Route path="*" component={ErrorPage} /> */}
            </Switch>
        </Router>
    )
}

export default App
