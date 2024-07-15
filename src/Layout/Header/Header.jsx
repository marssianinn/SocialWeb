import React from 'react';
import {BiChevronsDown} from "react-icons/bi";
import {IoMdNotifications} from "react-icons/io";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <div className='header__left'>
                        <h1 className='header__title'>MARS Web</h1>
                        <HeaderSearch/>
                    </div>
                    <div className='header__right'>
                        <span className='header__notif'>
                            <IoMdNotifications/>
                        </span>
                        <span className='header__user'>
                            <img className='header__user-photo' src="" alt=""/>
                            <span className='header__user-icon'>
                                <BiChevronsDown/>
                            </span>
                        </span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;