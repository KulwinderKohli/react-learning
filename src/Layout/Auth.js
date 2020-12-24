import React, { Component } from 'react'

class Auth extends Component {
    render() {

        const { children, bgImage } = this.props
        const bgColor = {backgroundColor: '#4e73df', height: '100vh'}
        
        return (
                <div style={bgColor}>
                    <div className="container" style={bgColor}>
                        <div className="row justify-content-center">
                            <div className="col-xl-10 col-lg-12 col-md-9">
                                <div className="card o-hidden border-0 shadow-lg my-5">
                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className={'col-lg-6 d-none d-lg-block '+ bgImage}></div>
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