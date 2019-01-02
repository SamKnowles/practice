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
import chipPic from '../Pictures/pokahChips.png'

let playerArray = require('../Util/playerArray');

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activePlayer: 0
        }

    }
    render() {
        console.log(playerArray);
        return (
            <div className='poker-table-wrapper'>
                <div className='poker-table'>
                    <div className='seating-wrapper'>
                    { playerArray && playerArray.map(player => {
                        console.log(player.className)
                        return ( 
                            <div className={`player-profile ${player.className}`} activeClassName={this.state.activePlayer ? 'selected' : null}>
                                <div className='player-face'><img className='playerFace' src={player.imgUrl} alt="" /></div>
                                <div className='player-chips'><img className='chips-pic' src={chipPic} alt="" /></div>
                                <div className='dealer-smallblind-bigblind'>
                                    {player.position === 'dealer' ? <div className='dealer'>D</div> : null}
                                    {player.position === 'small blind' ? <div className='small-blind'>SB</div> : null}
                                    {player.position === 'big blind' ? <div className='big-blind'>BB</div> : null}
                                </div>
                                <div className='player-cards'>
                                    <div className='card hand'></div>
                                    <div className='card hand'></div>
                                </div>
                            </div>
                        )
                    })}
                        {/* <div className='seating'>
                            <div></div>
                            <PointyKim />
                            <Kim />
                            <Borat />
                            <div></div>
                            <Kimmy /> */}
                            <div className='mid-section-top'>
                                <div className='card-wrapper'>
                                    <div className='card'>F</div>
                                    <div className='card'>F</div>
                                    <div className='card'>F</div>
                                    <div className='card'>T</div>
                                    <div className='card'>R</div>
                                </div>
                            </div>
                            <div className='mid-section-bottom'>
                                <div className='chips-container'>The Pot</div>
                            </div>
                            {/* <ET />
                            <Neo />
                            <Oscar />
                            <div></div>
                            <Drake />
                            <Leno />
                            <Putin /> */}
                        </div>
                    </div>
                </div>
        )
    }
}


