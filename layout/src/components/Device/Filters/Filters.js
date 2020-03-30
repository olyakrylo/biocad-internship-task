import React from 'react';
import './filters.css';

export default class Filters extends React.Component {
    radioClicked(e) {
        let filters = document.querySelector('#filters');
        let checkboxes = filters.querySelectorAll('.filters__checkbox');
        for (let box of checkboxes) {
            let circle = box.querySelector('.check-circle');
            let input = filters.querySelector(`input[value=${box.id}]`);
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
            <form className='filters' id='filters'>
                <select className='filters__select' defaultValue='1'>
                    <option value='2'>1 month</option>
                </select>

                <div className='filters__checkbox filters__checkbox_first' id='calibration' onClick={this.radioClicked}>
                    <svg viewBox='0 0 20 20' width='20' height='20'>
                        <circle cx='10' cy='10' r='9' stroke='#C1C1C1' strokeWidth='2' fill='transparent'></circle>
                        <circle className='check-circle' cx='10' cy='10' r='5' fill='#4990E2'></circle>
                    </svg>
                    <input className='filters__radio' defaultChecked type="radio" name="calibration" value="calibration" />
                    <label className='filters__label' htmlFor="calibration">Calibration</label>
                </div>
                <div className='filters__checkbox' id='measuring' onClick={this.radioClicked}>
                    <svg viewBox='0 0 20 20' width='20' height='20'>
                        <circle cx='10' cy='10' r='9' stroke='#C1C1C1' strokeWidth='2' fill='transparent'></circle>
                        <circle className='check-circle check-circle_hidden' cx='10' cy='10' r='5' fill='#4990E2'></circle>
                    </svg>
                    <input className='filters__radio' type="radio" name="measuring" value="measuring" />
                    <label className='filters__label' htmlFor="measuring">Measuring</label>
                </div>
                <div className='filters__checkbox' id='using' onClick={this.radioClicked}>
                    <svg viewBox='0 0 20 20' width='20' height='20'>
                        <circle cx='10' cy='10' r='9' stroke='#C1C1C1' strokeWidth='2' fill='transparent'></circle>
                        <circle className='check-circle check-circle_hidden' cx='10' cy='10' r='5' fill='#4990E2'></circle>
                    </svg>
                    <input className='filters__radio' type="radio" name="using" value="using" />
                    <label className='filters__label' htmlFor="using">Using</label>
                </div>
                <div className='filters__button-container'>
                    <button className='filters__button filters__button_blue filters__button_left'>Generate report
                        <div className='filters__button_hover'></div>
                    </button>

                    {/* display: none */}
                    <button className='filters__button filters__button_white filters__button_right'>Save pdf
                        <div className='filters__button_hover'></div>
                    </button>
                </div>
            </form>
        )
    }
}