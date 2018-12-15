import React from 'react'

import chipPic from '../Pictures/pokahChips.jpg'
import playerFace from '../Pictures/player face.png'

function Table() {
    return (
        <div className='poker-table-wrapper'>
            <div className='poker-table'>
                <div className='seating-wrapper'>
                    <div className='seating'>
                        <div></div>
                        <div className='player-profile'>
                            <div className='player-face'><img className='playerFace' src={playerFace} alt="" /></div>
                            <div className='player-chips'><img className='chips-pic' src={chipPic} alt="" /></div>
                            <div className='dealer-smallblind-bigblind'>
                                <div className='dealer'>D</div>
                                <div className='small-blind'>SB</div>
                                <div className='big-blind'>BB</div>
                            </div>
                            <div className='player-cards'>
                                <div className='card hand'></div>
                                <div className='card hand'></div>
                            </div>
                        </div>
                        <div className='player-profile'>
                            <div className='player-face'><img className='playerFace' src={playerFace} alt="" /></div>
                            <div className='player-chips'>
                                <img className='chips-pic' src={chipPic} alt="" />
                            </div>
                            <div className='dealer-smallblind-bigblind'>
                                <div className='dealer'>D</div>
                                <div className='small-blind'>SB</div>
                                <div className='big-blind'>BB</div>
                            </div>
                            <div className='player-cards'>
                                <div className='card hand'></div>
                                <div className='card hand'></div>
                            </div>
                        </div>
                        <div className='player-profile'>
                            <div className='player-face'><img className='playerFace' src={playerFace} alt="" /></div>
                            <div className='player-chips'><img className='chips-pic' src={chipPic} alt="" /></div>
                            <div className='dealer-smallblind-bigblind'>
                                <div className='dealer'>D</div>
                                <div className='small-blind'>SB</div>
                                <div className='big-blind'>BB</div>
                            </div>
                            <div className='player-cards'>
                                <div className='card hand'></div>
                                <div className='card hand'></div>
                            </div>
                        </div>
                        <div></div>
                        <div className='player-profile'>
                            <div className='player-chips'><img className='chips-pic' src={chipPic} alt="" /></div>
                            <div className='player-cards'>
                                <div className='card hand'></div>
                                <div className='card hand'></div>
                            </div>
                            <div className='player-face'><img className='playerFace' src={playerFace} alt="" /></div>
                            <div className='dealer-smallblind-bigblind'>
                                <div className='dealer'>D</div>
                                <div className='small-blind'>SB</div>
                                <div className='big-blind'>BB</div>
                            </div>
                        </div>
                        <div className='player-profile mid-section-top'>
                            <div className='card-wrapper'>
                                <div className='card'>F</div>
                                <div className='card'>F</div>
                                <div className='card'>F</div>
                                <div className='card'>T</div>
                                <div className='card'>R</div>
                            </div>
                        </div>
                        <div className='player-profile'>
                            <div className='dealer-smallblind-bigblind'>
                                <div className='dealer'>D</div>
                                <div className='small-blind'>SB</div>
                                <div className='big-blind'>BB</div>
                            </div>
                            <div className='player-face'><img className='playerFace' src={playerFace} alt="" /></div>
                            <div className='player-cards'>
                                <div className='card hand'></div>
                                <div className='card hand'></div>
                            </div>
                            <div className='player-chips'><img className='chips-pic' src={chipPic} alt="" /></div>
                        </div>
                        <div className='player-profile'>
                            <div className='player-chips'><img className='chips-pic' src={chipPic} alt="" /></div>
                            <div className='player-cards'>
                                <div className='card hand'></div>
                                <div className='card hand'></div>
                            </div>
                            <div className='player-face'><img className='playerFace' src={playerFace} alt="" /></div>
                            <div className='dealer-smallblind-bigblind'>
                                <div className='dealer'>D</div>
                                <div className='small-blind'>SB</div>
                                <div className='big-blind'>BB</div>
                            </div>
                        </div>
                        <div className='mid-section-bottom'>
                            <div className='chips-container'>The Pot</div>
                        </div>
                        <div className='player-profile'>
                            <div className='dealer-smallblind-bigblind'>
                                <div className='dealer'>D</div>
                                <div className='small-blind'>SB</div>
                                <div className='big-blind'>BB</div>
                            </div>
                            <div className='player-face'><img className='playerFace' src={playerFace} alt="" /></div>
                            <div className='player-cards'>
                                <div className='card hand'></div>
                                <div className='card hand'></div>
                            </div>
                            <div className='player-chips'><img className='chips-pic' src={chipPic} alt="" /></div>
                        </div>
                        <div></div>
                        <div className='player-profile'>
                            <div className='player-cards'>
                                <div className='card hand'></div>
                                <div className='card hand'></div>
                            </div>
                            <div className='dealer-smallblind-bigblind'>
                                <div className='dealer'>D</div>
                                <div className='small-blind'>SB</div>
                                <div className='big-blind'>BB</div>
                            </div>
                            <div className='player-chips'><img className='chips-pic' src={chipPic} alt="" /></div>
                            <div className='player-face'><img className='playerFace' src={playerFace} alt="" /></div>
                        </div>
                        <div className='player-profile'>
                            <div className='player-cards'>
                                <div className='card hand'></div>
                                <div className='card hand'></div>
                            </div>
                            <div className='dealer-smallblind-bigblind'>
                                <div className='dealer'>D</div>
                                <div className='small-blind'>SB</div>
                                <div className='big-blind'>BB</div>
                            </div>
                            <div className='player-chips'><img className='chips-pic' src={chipPic} alt="" /></div>
                            <div className='player-face'><img className='playerFace' src={playerFace} alt="" /></div>
                        </div>
                        <div className='player-profile'>
                            <div className='player-cards'>
                                <div className='card hand'></div>
                                <div className='card hand'></div>
                            </div>
                            <div className='dealer-smallblind-bigblind'>
                                <div className='dealer'>D</div>
                                <div className='small-blind'>SB</div>
                                <div className='big-blind'>BB</div>
                            </div>
                            <div className='player-chips'><img className='chips-pic' src={chipPic} alt="" /></div>
                            <div className='player-face'><img className='playerFace' src={playerFace} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
