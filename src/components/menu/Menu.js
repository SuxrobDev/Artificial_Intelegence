import React from 'react';
import List from "../List";

const Menu = ({menu = []}) => {
    return (
        <>
            <ul className="header_menu d-flex justify-content-between">
                <List items={menu}>
                    {({id, name, url})=><li key={id}><a href={url}>{name}</a></li>}
                </List>
            </ul>
        </>
    );
};

export default Menu;