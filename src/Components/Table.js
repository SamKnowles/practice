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
        this.playerArray = playerArray;
    }
    next = () => {
        let activePlayer = this.state.activePlayer;
        
        if (activePlayer === playerArray.length - 1) {
            activePlayer = 0;
        } else {
            activePlayer
        }
        let foldedPlayer = this.playerArray[this.state.activePlayer]
        for (let i = activePlayer; i < playerArray.length; i++) {
            console.log("activePlayer is currently", i);
            console.log("folded " + !playerArray[i].action.folded)
            console.log(playerArray.length)
            if (!playerArray[i].action.folded) {
                console.log(activePlayer)
                activePlayer = i;
                console.log('hit 1')
                break;
            // } else if (playerArray[i].action.folded && i !== playerArray.length - 1) {
            //     activePlayer++;
            // } else if (playerArray[i].action.folded && i === playerArray.length - 1) {
            //     playerArray[i] = activePlayer;
            
            } else {
                console.log('hit 2')
                activePlayer++;
            }
        }
        this.setState({
            activePlayer,
        }); 
    }

    fold = () => {
        let activePlayer = this.playerArray[this.state.activePlayer];
        activePlayer.action.folded = true;
        this.setState ({
            activePlayer,

        })
        this.next();
    }

    render() {
        return (
            <div className='poker-table-wrapper'>
                <div className='poker-table'>
                    <div className='seating-wrapper'>
                        {this.playerArray && this.playerArray.map((player, i) => {
                            {/* console.log(player) */}
                            return (
                                <Player className={player.className}
                                    imgUrl={player.imgUrl}
                                    chipPic={player.chipPic}
                                    isActive={this.state.activePlayer === i}
                                    isDealer={this.state.dealer === i}
                                    isSmallBlind={i === (this.state.dealer + 1) % playerArray.length}
                                    isBigBlind={i === (this.state.dealer + 2) % playerArray.length}
                                    isFolded={player.action.folded}
                                />
                            )
                        })}
                        <button className="btn btn-default" onClick={this.next}>Check</button>
                        <button className={"btn btn-default"} onClick={this.fold}>Fold</button>
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


