import React from 'react';

const Title = ({children, className = "", size = 1}) => {
    return (
        <>
            {size == 1 ? <h1 className={className}>{children}</h1> : <h2 className={className}>{children}</h2>}
        </>
    );
};

export default Title;