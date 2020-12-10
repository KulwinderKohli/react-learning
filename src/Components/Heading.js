/*
* @Author: Kulwinder Kohli
* @Date:   2020-12-10 16:04:18
* @Last Modified by:   Kulwinder Kohli
* @Last Modified time: 2020-12-10 16:05:03
*/
import React, { Component } from 'react';

class Heading extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<h1 className="h3 mb-4 text-gray-800">{this.props.heading}</h1>
		);
	}
}

export default Heading