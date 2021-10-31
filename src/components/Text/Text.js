import React from 'react';

const Text = ({children, className=""}) => {
    return (
        <p className={`text-secondary + ${className}`}>{children}</p>
    );
};

export default Text;