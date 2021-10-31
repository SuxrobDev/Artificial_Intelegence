import React from 'react';
import Title from "../Title";
import Text from "../Text";

const Card = ({img = null, title="", text=""}) => {
    return (
        <div className="col-12 col-md-6 col-lg mb-lg-0 mb-4">
            <div className="card custom_card align-items-center text-center p-3">
                <img src={img} alt="" className="img-fluid" />
                <Title size={2} className="font-weight-bold my-4 text-secondary">{title}</Title>
                <Text className="text-secondary">{text}</Text>
            </div>
        </div>
    );
};

export default Card;