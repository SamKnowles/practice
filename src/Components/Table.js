import React from 'react'

import Player from '../Util/Player'
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
            dealer: 0,
            smallBlind: 0,
            bigBlind: 0,
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
        let dealer = this.state.dealer;
        if (activePlayer === playerArray.length - 1) {
            activePlayer = 0;
        } else {
            activePlayer++;
        }
        if (activePlayer === playerArray.length + 1) {
            dealer++
        }
        this.setState({
            activePlayer,
            dealer
        });
    }


    render() {
console.log(this.state.dealer);
        return (
            <div className='poker-table-wrapper'>
                <div className='poker-table'>
                    <div className='seating-wrapper'>
                        {playerArray && playerArray.map((player, i) => {
                            return (
                                <Player className={player.className}
                                        imgUrl={player.imgUrl} 
                                        chipPic={player.chipPic}
                                        isActive={this.state.activePlayer === i}
                                        isDealer={this.state.playerArrayC === playerArray + 1 === i}
                                        isSmallBlind={i === (this.state.dealer + 1) % playerArray.length}
                                        isBigBlind={i === (this.state.dealer + 2) % playerArray.length}
                                         />
                            )
                        })}
                        <button className="btn btn-default" onClick={this.next}>Check</button>
                        <button className="btn btn-default" onClick={this.next}>Fold</button>
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


