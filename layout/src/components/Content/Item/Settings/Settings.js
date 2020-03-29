import React from 'react';
import './settings.css';

export default class Settings extends React.Component {
    checkboxClicked(e) {
        let settings = document.querySelector('#settings');
        let checkboxes = settings.querySelectorAll('.settings__checkbox');
        for (let box of checkboxes) {
            let circle = box.querySelector('.check-circle');
            let input = settings.querySelector(`input[value=${box.id}]`);
            if (box.id === e.currentTarget.id) {
                circle.classList.remove('check-circle_hidden');
                input.checked = true;
            } else {
                circle.classList.add('check-circle_hidden');
                input.checked = false;
            }
        }
    }

    render() {
        return (
            <div className='item__settings settings' id='settings'>
                <select className='settings__select'>
                    <option value='1'>1 week</option>
                    <option selected value='2'>1 month</option>
                    <option value='3'>1 year</option>
                </select>

                <div className='settings__checkbox settings__checkbox_first' id='calibration' onClick={this.checkboxClicked}>
                    <svg viewBox='0 0 20 20' width='20' height='20'>
                        <circle cx='10' cy='10' r='9' stroke='#C1C1C1' strokeWidth='2' fill='transparent'></circle>
                        <circle className='check-circle' cx='10' cy='10' r='5' fill='#4990E2'></circle>
                    </svg>
                    <input checked type="radio" name="calibration" value="calibration" />
                    <label for="calibration">Calibration</label>
                </div>
                <div className='settings__checkbox' id='measuring' onClick={this.checkboxClicked}>
                    <svg viewBox='0 0 20 20' width='20' height='20'>
                        <circle cx='10' cy='10' r='9' stroke='#C1C1C1' strokeWidth='2' fill='transparent'></circle>
                        <circle className='check-circle check-circle_hidden' cx='10' cy='10' r='5' fill='#4990E2'></circle>
                    </svg>
                    <input type="radio" name="measuring" value="measuring" />
                    <label for="measuring">Measuring</label>
                </div>
                <div className='settings__checkbox' id='using' onClick={this.checkboxClicked}>
                    <svg viewBox='0 0 20 20' width='20' height='20'>
                        <circle cx='10' cy='10' r='9' stroke='#C1C1C1' strokeWidth='2' fill='transparent'></circle>
                        <circle className='check-circle check-circle_hidden' cx='10' cy='10' r='5' fill='#4990E2'></circle>
                    </svg>
                    <input type="radio" name="using" value="using" />
                    <label for="using">Using</label>
                </div>
                <button className='settings__button'>Generate report</button>
            </div>
        )
    }
}