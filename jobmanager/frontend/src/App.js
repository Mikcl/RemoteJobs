import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/layout/Header';
import { PrivateRoute } from "./components/common/PrivateRoute";
import { Alert } from './components/layout/Alert';

import { Landing } from './pages/Landing';
import { Home } from './pages/Home/';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Posts } from './pages/Posts';

import { loadUser } from './actions/auth';

// Alert options
const alertOptions = {
    timeout: 3000,
    position: 'top right',
    containerStyle: {
        zIndex: 100,
    }
}

const App = () => {

    useEffect(() => {
        store.dispatch(loadUser())
    }, [store.getState()])

    return (
        <>
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}
                    {...alertOptions}>
                    <Router>
                        <Header />
                        <Alert />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Landing} />
                                <Route exact path="/jobs" component={Home} />
                                <PrivateRoute exact path="/posts">
                                    <Posts />
                                </PrivateRoute>
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/login" component={Login} />

                            </Switch>
                        </div>
                    </Router>
                </AlertProvider>
            </Provider>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById("app"))