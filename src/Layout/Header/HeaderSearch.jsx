import React from 'react';
import {AiOutlineSearch} from "react-icons/ai";

const HeaderSearch = () => {
    return (
        <label className='header__search'>
            <span className='header__search-icon'>
                <AiOutlineSearch/>
            </span>
            <input className='header__search-field' type="text"/>
        </label>
    );
};

export default HeaderSearch;