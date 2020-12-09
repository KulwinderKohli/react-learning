import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

// Importing the pages
import Dashboard from './Pages/Dashboard'
import Images from './Pages/Images'
import Post from './Pages/Post'
import NotFound from './Pages/NotFound'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route path="/images">
                        <Images />
                    </Route>
                    <Route path="/posts">
                        <Post />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

export default App;

