import React from 'react'

function PlayersOptions() {
    return (
        <div>
            <div className='player-options-wrapper'>
                <div className='fold-button'>Fold</div>
                <div className='bet-raise-wrapper'>
                    <div className='slider-wrapper'>
                        <div className='raise-amount'>$98,000</div>
                        <div className='slider'>Money Slider</div>
                    </div>
                    <div className='bet-raise-button-wrappers'>
                        <div className='bet-button'>Bet</div>
                        <div className='raise-button'>Raise</div>
                    </div>
                </div>
                <div className='check-button'>Check</div>
                <div className='call-button'>Call</div>
            </div>
        </div>
    )
}

export default PlayersOptions
