import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light pt-3">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="img-fluid" style={{height: '60px'}} src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link mr-3" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="#">Our Protfolioz</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="#">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3" href="#">Contact Us</a>
                        </li>
                        <Link to="/login"><button style={{cursor: 'pointer'}} className="btn btn-dark">Login</button></Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;