import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

// Importing the pages
import Dashboard from './Pages/Dashboard'
import AllEmployee from './Module/Employee/All'
import CreateEmployee from './Module/Employee/Create'
import NotFound from './Pages/NotFound'
import Register from './Module/Auth/Register'
import Login from './Module/Auth/Login'
import ForgetPassword from './Module/Auth/ForgetPassword'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route path="/employee/all">
                        <AllEmployee />
                    </Route>
                    <Route path="/employee/create">
                        <CreateEmployee />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/forget-password">
                        <ForgetPassword />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

export default App;

