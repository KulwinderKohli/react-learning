import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
		super(props);
	}
	render() {
        const {text} = this.props 
		return (
			<footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                      <span>{text}</span>
                    </div>
                </div>
            </footer>
		);
	}
}

export default Footer