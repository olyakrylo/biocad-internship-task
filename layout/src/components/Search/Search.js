import React from 'react';
import './search.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className='search'>
                <p className='search__title'>Enter inventory number, guid or bims id</p>
                <form className='search__form' defaultValue='2'>
                    <select className='search__select'>
                        <option value='1'>A-001233</option>
                        <option value='2'>A-001234</option>
                        <option value='3'>A-001235</option>
                    </select>
                    <button className='search__button'>Search
                        <div className='search__button_hover'></div>
                    </button>
                </form>
            </div>
        )
    }
}