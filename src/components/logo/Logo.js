import React from 'react';

const Logo = ({logo=null}) => {
    return (
        <a href="#" className="header_logo d-flex align-items-center"><img src={logo} alt="logo"/><span>Artificial Intelligence</span></a>
    );
};

export default Logo;