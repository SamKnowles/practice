import React, { Component } from 'react'
import chipPic from '../../Pictures/pokahChips.png'
import borat from '../../Pictures/Borat.png'


export default class Borat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Borat',
            activePlayer: false,
            chipCount: 200,
            position: 0,
            hand: [{ suit: 'Spades', value: 'Ace' },
            { suit: 'Clubs', value: 'Ace' }],
            action: {
                folded: false,
                raised: false,
                checked: false,
                called: false,
                bet: false
            }
        }
    }

    fold = () => {
        this.setState({
            action: {
                folded: true
            }
        })
    }
    raise = () => {
        this.setState({
            action: {
                raised: true
            }
        })
    }
    check = () => {
        this.setState({
            action: {
                checked: true
            }
        })
    }
    call = () => {
        this.setState({
            action: {
                called: true
            }
        })
    }
    bet = () => {
        this.setState({
            action: {
                bet: true
            }
        })
    }

    render() {
        return (
            <div className='player-profile' activeClassName={this.state.activePlayer ? 'selected' : null}>
            <div className='player-face'><img className='playerFace' src={borat} alt="" /></div>
                <div className='player-chips'><img className='chips-pic' src={chipPic} alt="" /></div>
                <div className='dealer-smallblind-bigblind'>
                    {this.state.position === 'dealer' ? <div className='dealer'>D</div> : null}
                    {this.state.position === 'small blind' ? <div className='small-blind'>SB</div> : null}
                    {this.state.position === 'big blind' ? <div className='big-blind'>BB</div> : null}
                </div>
                <div className='player-cards'>
                    <div className='card hand'></div>
                    <div className='card hand'></div>
                </div>
            </div>
        )
    }
}


