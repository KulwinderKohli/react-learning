import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MenuItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		// Properties
		const {menuname, menuicon, route} = this.props

		return (
			<li className="nav-item">
                <Link className="nav-link" to={route}>
                    <i className={menuicon}></i>
                     <span>{menuname}</span>
                </Link>
            </li>
		);
	}
}

export default MenuItem