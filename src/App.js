import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

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
                                            <Route path="/images">
                                                <Images />
                                            </Route>
                                            <Route path="/posts">
                                                <Post />
                                            </Route>
                                        </Row>
                                    </Container>
                                </div>
                                <Footer />
                            </div>
                        </div>
                    </div>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;

