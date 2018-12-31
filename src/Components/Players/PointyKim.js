import React, { Component } from 'react'
import chipPic from '../../Pictures/pokahChips.png'
import pointyKim from '../../Pictures/PointingKim.png'


export default class PointyKim extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Pointy Kim',
            activePlayer: false,
            chipCount: 200,
            position: '',
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
            <div className='player-profile'>
                <div className='player-face'><img className='playerFace' src={pointyKim} alt="" /></div>
                <div className='player-chips'><img className='chips-pic' src={chipPic} alt="" /></div>
                <div className='dealer-smallblind-bigblind'>
                    {this.state.position === 0 ? <div className='dealer'>D</div> : null}
                    {this.state.position === 1 ? <div className='small-blind'>SB</div> : null}
                    {this.state.position === 2 ? <div className='big-blind'>BB</div> : null}
                </div>
                <div className='player-cards'>
                    <div className='card hand'></div>
                    <div className='card hand'></div>
                </div>
            </div>
        )
    }
}


