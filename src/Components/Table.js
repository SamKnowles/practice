import React from 'react'

import Putin from '../Components/Players/Putin'
import Borat from '../Components/Players/Borat'
import Drake from '../Components/Players/Drake'
import ET from '../Components/Players/ET'
import Neo from '../Components/Players/Neo'
import Kim from '../Components/Players/Kim'
import Leno from '../Components/Players/Leno'
import Oscar from '../Components/Players/Oscar'
import PointyKim from '../Components/Players/PointyKim'
import Kimmy from '../Components/Players/Kimmy'

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activePlayer: 0
        }

    }
    render() {
        return (
            <div className='poker-table-wrapper'>
                <div className='poker-table'>
                    <div className='seating-wrapper'>
                        <div className='seating'>
                            <div></div>
                            <PointyKim />
                            <Kim />
                            <Borat />
                            <div></div>
                            <Kimmy />
                            <div className='player-profile mid-section-top'>
                                <div className='card-wrapper'>
                                    <div className='card'>F</div>
                                    <div className='card'>F</div>
                                    <div className='card'>F</div>
                                    <div className='card'>T</div>
                                    <div className='card'>R</div>
                                </div>
                            </div>
                            <ET />
                            <Neo />
                            <div className='mid-section-bottom'>
                                <div className='chips-container'>The Pot</div>
                            </div>
                            <Oscar />
                            <div></div>
                            <Drake />
                            <Leno />
                            <Putin />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


