import React from 'react';
import './content.css';
import Item from './Item/Item';
import info from './info';
import Report from './Report/Report';
import reportInfo from './reportInfo';

export default class Content extends React.Component {
    render() {
        return (
            <div className='content'>
                <Item info={info}/>
                <Report info={reportInfo}/>
            </div>
        )
    }
}