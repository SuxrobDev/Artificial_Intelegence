import React from 'react';
import Logo from "../logo";
import Menu from "../menu";
import Button from "../button";

const Header = ({logo = null, menu = null}) => {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-8 col-md-4">
                        <Logo logo={logo}/>
                    </div>
                    <div className="d-none d-md-block col-md-6">
                        <Menu menu={menu}/>
                    </div>
                    <div className="col-4 col-md-2 text-right">
                        <Button>Sign In</Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;