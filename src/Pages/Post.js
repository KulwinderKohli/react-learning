import React, { Component } from 'react';
import Header from './../Layout/Header';
import Sidebar from './../Layout/Sidebar';
import Footer from './../Layout/Footer';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Loader from '../Components/Loader/Loader'

class Post extends Component {
	errorHandler = ({ error }) => this.setState({ error })  
	
	onChangeCallback = selectedInterval => this.setState({ selectedInterval })  

  constructor(props) {
	  super(props);
	  this.state = {
		  posts: [],
		  isLoading: true
	  };
	  this.callApi = this.callApi.bind(this)
  }

  componentDidMount() {
	  
  }

  callApi() {
	  fetch('https://jsonplaceholder.typicode.com/posts')
		  .then(response => response.json())
		  .then(json => this.setState({
			  posts: json,
			  isLoading: false
		  }))
  }

	render() {
		const { posts, isLoading } = this.state

		// updating data to userPosts
		let userPosts 
		if (isLoading) {
			userPosts = <Col style={{textAlign: 'center'}}><Loader/><br/><Button onClick={this.callApi}>Load more posts</Button></Col>
		} else {
			if (posts.length > 0 ) {
				userPosts = posts.map((post, index) => 
						<Col lg={12} style={{marginBottom: '10px'}}>
							<Card>
								<Card.Body>
									<Card.Title>{post.title}</Card.Title>
									<Card.Text>{post.body}</Card.Text>
								</Card.Body>
							</Card> 
						</Col>
					);
			} else {
				userPosts = <Col><h1 style={{textAlign: 'center'}}>No posts available.</h1></Col>
			}
		}

		return (
			<div>
				<div id="wrapper">
					<Sidebar/>
						<div id="content-wrapper" className="d-flex flex-column">
		            		<div id="content">
								<Header/>
								<Container>
								<i className="fa fa-refresh fa-spin"></i>
									<Row>
										{userPosts}
									</Row>
								</Container>
							</div>
							<Footer text="Copyright OneBusiness 2020"/>
						</div>
				</div>
			</div>
		);
	}
	}
export default Post;