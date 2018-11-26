import React from 'react'
import chart from '../Pictures/calling-hands.jpg'

function CallingHands() {

    const cards = ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH',]

    const position = ['UTG', 'UTG1', 'UTG2', 'MP1', 'MP2', 'MP3', 'CO', 'BTN', 'SB', 'BB'];

    return (
        <div className='calling-hands-component-wrapper'>
            <div className='calling-hands-container-wrapper'>
                <div class="calling-hands-container">
                    <div class="calling-hands-info">1</div>
                    <div class="ch-seat-1">UTG</div>
                    <div class="ch-seat-2">UTG1</div>
                    <div class="ch-seat-3">UTG2</div>
                    <div class="ch-seat-5">MP1</div>
                    <div class="ch-seat-6">BB</div>
                    <div class="ch-seat-7">Cards</div>
                    <div class="ch-seat-8">Chips</div>
                    <div class="ch-seat-9">MP2</div>
                    <div class="ch-seat-10">SB</div>
                    <div class="ch-seat-11">BTN</div>
                    <div class="ch-seat-12">CO</div>
                    <div class="ch-seat-13">MP3</div>
                </div>
            </div>
            <div className='calling-hand-pic-wrapper'>
                <img className='calling-hands-pic' src={chart} alt="" />
            </div>
        </div>
    )
}

export default CallingHands
