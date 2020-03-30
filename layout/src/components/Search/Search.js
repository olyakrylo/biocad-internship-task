import React from 'react';
import './search.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className='search'>
                <p className='search__title'>Enter inventory number, guid or bims id</p>
                <form className='search__form'>
                    <input placeholder='A-001234' className='search__input'></input>
                    <button className='search__button'>Search</button>
                </form>
            </div>
        )
    }
}