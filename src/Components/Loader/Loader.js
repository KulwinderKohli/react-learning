/*
* @Author: Kulwinder Kohli
* @Date:   2020-11-27 16:13:49
* @Last Modified by:   Kulwinder Kohli
* @Last Modified time: 2020-11-27 16:15:05
*/
import React, { Component } from 'react'
import './Loader.css'

class Loader extends Component {
	render() {
		return (
			<div className="lds-ripple"><div></div><div></div></div>
		);
	}
}

export default Loader