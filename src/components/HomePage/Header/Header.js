import React from 'react';
import Brand from './Brand';
import HeaderMain from './HeaderMain';
import Nav from './Nav';

const Header = () => {
    return (
        <>
            <div style={{ backgroundColor: '#FBD062', clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)', overflow: 'hidden', }}>
                <Nav></Nav>
                <HeaderMain></HeaderMain>
            </div>
            <Brand></Brand>
        </>
    );
};

export default Header;