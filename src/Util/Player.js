import React from 'react';

export default class Player extends React.Component {
        constructor(props) {
            super()
            this.state = {
                name : '',
                activePlayer : false,
                chipCount : 200,
                position : '',
                hand : [{suit: '', name: ''}],
                action : {
                    folded: false,
                    raised: false,
                    checked: false,
                    called: false,
                    bet: false
                }

            }
        }
        takeTurn(action) {
        }

        render(){
            let {props} = this
            return (
            <div className={`player-profile ${props.className}`} activeClassName={props.isActive ? 'selected' : null}>
                <div className='player-face'><img className='playerFace' src={props.imgUrl} alt="" /></div>
                <div className='player-chips'><img className='chips-pic' src={props.chipPic} alt="" /></div>
                <div className='dealer-smallblind-bigblind'>
                    {props.isActive ? <div className='active'></div> : null}
                    {props.isDealer ? <div className='dealer'>D</div> : null}
                    {props.isSmallBlind ? <div className='small-blind'>SB</div> : null}
                    {props.isBigBlind ? <div className='big-blind'>BB</div> : null}
                    {props.isFolded ? <div className='folded'></div> : null}
                    {props.isRaised ? <div className='raised'></div> : null}
                    {props.isChecked ? <div className='checked'></div> : null}
                    {props.isCalled ? <div className='called'></div> : null}
                    {props.isBetting ? <div className='betting'></div> : null}
                </div>
                <div className='player-cards'>
                    <div className='card hand'></div>
                    <div className='card hand'></div>
                </div>
            </div>
            )}
}

