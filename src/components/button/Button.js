import React from 'react';

const Button = ({children , className=""}) => {
    return (
        <a href="#" className={`btn btn-primary general_btn ${className}`}>{children}</a>
    );
};

export default Button;