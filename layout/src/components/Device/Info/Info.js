import React from 'react';
import './info.css';

export default class Info extends React.Component {
    render() {
        let { info } = this.props.info
        return (
            <div className='device__info'>
                <span className='device__info_grey'>Тип оборубования: </span>
                {info.type}<br/>
                <span className='device__info_grey'>Статус: </span>
                {info.status}<br/>
                <span className='device__info_grey'>Изготовитель: </span>
                {info.mfr}<br/>
                <span className='device__info_grey'>Модель: </span>
                {info.model}<br/>
                <span className='device__info_grey'>Ответственное подразделение (ремонт): </span>
                {info.respUnit}<br/>
                <span className='device__info_grey'>Эксплуатирующее подразделение: </span>
                {info.expUnit}<br/>
                <span className='device__info_grey'>МОЛ: </span>
                {info.bailee}<br/>
                <span className='device__info_grey'>Территория: </span>
                {info.territory}<br/>
                <span className='device__info_grey'>Серийный номер: </span>
                {info.serialNumber}<br/>
                <span className='device__info_grey'>GUID: </span>
                <span className='device__info_blue'>{info.GUID}</span><br/>
                <span className='device__info_grey'>Bims ID: </span>
                <span className='device__info_blue'>{info.bimsId}</span><br/>
                <span className='device__info_grey'>Tam: </span>
                <span className='device__info_blue'>{info.tam}</span><br/>
            </div>
        )
    }
}