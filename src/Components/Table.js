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

let data = require('../Util/playerArray');
let playerArray = data.playerArray

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activePlayer: 0,
            action: {
                folded: false,
                raised: false,
                checked: false,
                called: false,
                bet: false
            }
        }
    }
    next = () => {
        let activePlayer = this.state.activePlayer;
        if (activePlayer === playerArray.length - 1) {
            activePlayer = 0;
        } else {
            activePlayer++;
        }
        this.setState({
            activePlayer
        });
    }

    fold = () => {
        this.setState({
            action: {
                folded: true
            }
        })
    }


    render() {
        return (
            <div className='poker-table-wrapper'>
                <div className='poker-table'>
                    <div className='seating-wrapper'>
                        {playerArray && playerArray.map((player, i) => {
                            return (
                                <div className={`player-profile ${player.className}`} activeClassName={this.state.activePlayer === i ? 'selected' : null}>
                                    <div className='player-face'><img className='playerFace' src={player.imgUrl} alt="" /></div>
                                    <div className='player-chips'><img className='chips-pic' src={chipPic} alt="" /></div>
                                    <div className='dealer-smallblind-bigblind'>
                                        {this.state.activePlayer === i ? <div className='dealer'>D</div> : null}
                                        {i === (this.state.activePlayer + 1) % playerArray.length ? <div className='small-blind'>SB</div> : null}
                                        {i === (this.state.activePlayer + 2) % playerArray.length ? <div className='big-blind'>BB</div> : null}
                                    </div>
                                    <div className='player-cards'>
                                        <div className='card hand'></div>
                                        <div className='card hand'></div>
                                    </div>
                                </div>
                            )
                        })}
                        <button className="btn btn-default" onClick={this.next}>Check</button>
                        <button className={`btn btn-default ${this.state.action.folded ? 'is-inactive': null}`} onClick={this.next}>Fold</button>
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


