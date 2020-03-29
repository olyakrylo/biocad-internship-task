import React from 'react';
import './header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='header__search search'>
                    <p className='search__title'>Enter inventory number, guid or bims id</p>
                    <form className='search__form'>
                        <input className='search__input'></input>
                        <button className='search__button'>Search</button>
                    </form>
                </div>
            </div>
        )
    }
}