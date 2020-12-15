/*
* @Author: Kulwinder Kohli
* @Date:   2020-12-15 15:19:32
* @Last Modified by:   Kulwinder Kohli
* @Last Modified time: 2020-12-15 15:21:05
*/
import React, { Component } from 'react';

class Icon extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {icon} = this.props
		
		return (
			<i className={"fa fa-"+icon}></i>
		);
	}
}

export default Icon;
