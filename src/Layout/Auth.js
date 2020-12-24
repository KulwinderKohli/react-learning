import React, { Component } from 'react'

const bgColor = {
    backgroundColor: '#4e73df'
}
class Auth extends Component {
    render() {
        const { children, bgImage } = this.props
        return (
                <div id="root" style={bgColor}>
                    <div className="container" style={bgColor}>
                        <div className="row justify-content-center">
                            <div className="col-xl-10 col-lg-12 col-md-9">
                                <div className="card o-hidden border-0 shadow-lg my-5">
                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className={bgImage}></div>
                                            <div className="col-lg-6">
                                                <div className="p-5">
                                                    {children}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Auth