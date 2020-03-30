import React from 'react';
import './device.css';
import deviceInfo from './deviceInfo'
import Filters from './Filters'
import Info from './Info'

export default class Device extends React.Component {
    render() {
        return (
            <div className='device'>
                <div className='device__left'>
                    <div className='device__title'>
                        <img className='device__icon' src={`./src/svg/${deviceInfo.icon}.svg`} alt=''/>
                        <p className='device__name'>{deviceInfo.name}</p>
                    </div>
                    <Filters />
                </div>
                <Info info={deviceInfo}/>
            </div>
        )
    }
}