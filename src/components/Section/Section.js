import React from 'react';

const Section = ({children, className="" , containerClass = "container" , rowClass=""}) => {
    return (
        <section className={className}>
            <div className={containerClass}>
                <div className={`row ${rowClass}`}>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;