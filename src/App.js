import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

// Importing the pages
import Dashboard from './Pages/Dashboard'
import AllEmployee from './Module/Employee/All'
import CreateEmployee from './Module/Employee/Create'
import NotFound from './Pages/NotFound'

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
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

export default App;

