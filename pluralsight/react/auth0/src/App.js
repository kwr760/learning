import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Pages/Public/Home';
import Profile from './Pages/Private/Profile';
import Nav from './Pages/Nav';
import Auth from './Auth/Auth';
import Callback from './Pages/Public/Callback';
import Public from './Pages/Public/Public';
import Private from './Pages/Private/Private';
import Courses from './Pages/Private/Courses';
import PrivateRoute from './Pages/PrivateRoute';
import AuthContext from './Auth/AuthContext';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: new Auth(this.props.history),
            tokenRenewalComplete: false
        }
    }

    componentDidMount() {
        this.state.auth.renewToken(() =>
            this.setState({tokenRenewalComplete: true })
        );
    }

    render() {
        const { auth } = this.state;
        if (!this.state.tokenRenewalComplete) {
            return "Loading...";
        }
        return (
            <AuthContext.Provider value={auth}>
                <Nav auth={auth} />
                <div className="body">
                    <Route
                        path="/"
                        exact
                        render={props => <Home auth={auth} {...props} />}
                    />
                    <Route
                        path="/callback"
                        render={props => (
                            <Callback auth={auth} {...props} />
                        )}
                    />
                    <PrivateRoute path="/profile" component={Profile} />
                    <Route path="/public" auth={ auth } component={Public} />
                    <PrivateRoute path="/private" component={Private} />
                    <PrivateRoute
                        path="/courses"
                        component={Courses}
                        scopes={['read:courses']}
                    />
                </div>
            </AuthContext.Provider>
        );
    }
}

export default App;
