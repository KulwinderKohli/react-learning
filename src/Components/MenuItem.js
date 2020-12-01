import React, { Component } from 'react';

class MenuItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		// Properties
		const {menuname, menuicon, route} = this.props

		return (
			<li className="nav-item">
                <a className="nav-link" href={route}>
                    <i className={menuicon}></i>
                     <span>{menuname}</span>
                </a>
            </li>
		);
	}
}

export default MenuItem