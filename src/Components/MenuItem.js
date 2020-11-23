import React, { Component } from 'react';

class MenuItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		// Properties
		const {menuname, menuicon} = this.props

		return (
			<li className="nav-item">
                <a className="nav-link collapsed" href="component" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className={menuicon}></i>
                     <span>{menuname}</span>
                </a>
            </li>
		);
	}
}

export default MenuItem