import React from 'react';
import './item.css';
import Settings from './Settings/Settings'
import Info from './Info/Info'

export default class Item extends React.Component {
    render() {
        // let { info } = this.props.info
        return(
            <div className='content__item item'>
                <div className='item__left'>
                    <div className='item__title'>
                        <img className='item__icon' src="./svg/scale.svg" alt='dafuk'/>
                        <p className='item__name'>{this.props.info.name}</p>
                    </div>
                    <Settings />
                </div>
                <Info info={this.props.info}/>
            </div>
        )
    }
}