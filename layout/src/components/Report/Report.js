import React from 'react'
import './report.css'
import reportInfo from './reportInfo'

export default class Report extends React.Component {
    *genUbsText(ubs) {
        for (let i in ubs) {
            yield (
                <span key={i}>{ubs[i]}<br/></span>
            )
        }
    }

    *genReport(info) {
        for (let elem of info) {
            let slopeIcon = elem.slopeStatus ? 'tick' : 'cross';
            let offsetIcon = elem.offsetStatus ? 'tick' : 'cross';
            yield (
                <tr key={info.indexOf(elem)}>    
                    <td className='report__date'>{elem.data.date}<br/>{elem.data.time}</td>
                    <td>
                        {[...this.genUbsText(elem.ubs)]}
                    </td>
                    <td>
                        <div className='report__item'>{elem.slope}</div>
                        <img className='report__icon' src={`./src/svg/${slopeIcon}.svg`} alt='' />
                    </td>
                    <td>
                        <div className='report__item'>{elem.offset}</div>
                        <img className='report__icon' src={`./src/svg/${offsetIcon}.svg`} alt='' />
                    </td>
                    <td className='report__user'>{elem.user}</td>
                </tr>
            )
        }
    }

    render() {
        return (
            <div className='report'>
                <p className='report__title'>Calibration report</p>
                <table className='report__table'>
                    <thead>
                        <tr>
                            <th className='report__data'>Data</th>
                            <th>Used buffer solutions</th>
                            <th>Slope, %<br/>Norm 95-105</th>
                            <th>Offset, mV<br/>Norm ±(0-20)</th>
                            <th>User</th>
                        </tr>
                    </thead>
                    <tbody >
                        {[...this.genReport(reportInfo)]}
                    </tbody>
                </table>
            </div>
        )
    }
}