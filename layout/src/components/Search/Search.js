import React from 'react';
import './search.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className='search'>
                <p className='search__title'>Enter inventory number, guid or bims id</p>
                <div className='search__form'>
                    <select className='search__select' defaultValue='1'>
                        <option value='1'>A-001234</option>
                    </select>
                    <button className='search__button'>Search
                        {/* <div className='search__button_hover'></div> */}
                    </button>
                </div>
            </div>
        )
    }
}