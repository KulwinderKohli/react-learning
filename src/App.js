import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Header from './Layout/Header'
import Sidebar from './Layout/Sidebar'
import Footer from './Layout/Footer'
import Images from './Pages/Images'
import Post from './Pages/Post'
import { Container, Row } from 'react-bootstrap';
class App extends React.Component {
    render() {
        return (
            <Router>
                <Link to="/images">Link to images</Link>
                <Link to="/posts">Link to posts</Link>
                <Switch>
                    <Route exact path="/">
                        <div>
                            <div id="wrapper">
                                <Sidebar />
                                <div id="content-wrapper" className="d-flex flex-column">
                                    <div id="content">
                                        <Header />
                                        <Container>
                                            <i className="fa fa-refresh fa-spin"></i>
                                            <Row>
                                                
                                            </Row>
                                        </Container>
                                    </div>
                                    <Footer />
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route path="/images">
                        <Images/>
                    </Route>
                    <Route path="/posts">
                        <Post/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;

