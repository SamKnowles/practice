import React from 'react'

import chipPic from '../Pictures/pokahChips.png'
import playerFace from '../Pictures/player face.png'
import stoicKim from '../Pictures/StoicKim.png'
import pointyKim from '../Pictures/PointingKim.png'
import borat from '../Pictures/Borat.png'
import drake from '../Pictures/Drake.png'
import et from '../Pictures/ET.png'
import neo from '../Pictures/Neo.png'
import oscar from '../Pictures/Oscar.png'
import leno from '../Pictures/Leno.png'
import putin from '../Pictures/Putin.png'

function Table() {
    return (
        <div className='poker-table-wrapper'>
            <div className='poker-table'>
                <div className='seating-wrapper'>
                    <div className='seating'>
                        <div></div>
                        <div className='player-profile'>
                            <div className='player-face'><img className='playerFace' src={pointyKim} alt="" /></div>
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
                            <div className='player-face'><img className='playerFace' src={stoicKim} alt="" /></div>
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
                            <div className='player-face'><img className='playerFace' src={borat} alt="" /></div>
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
                            <div className='player-face'><img className='playerFace' src={stoicKim} alt="" /></div>
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
                            <div className='player-face'><img className='playerFace' src={et} alt="" /></div>
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
                            <div className='player-face'><img className='playerFace' src={neo} alt="" /></div>
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
                            <div className='player-face'><img className='playerFace' src={oscar} alt="" /></div>
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
                            <div className='player-face'><img className='playerFace' src={drake} alt="" /></div>
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
                            <div className='player-face'><img className='playerFace' src={leno} alt="" /></div>
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
                            <div className='player-face'><img className='playerFace' src={putin} alt="" /></div>
                        </div>
                        <div className='player-options-wrapper'>
                            <div className='fold-button'>Fold</div>
                            <div className='bet-raise-wrapper'>
                                <div className='slider-wrapper'></div>
                                <div className='bet-raise-button-wrappers'>
                                    <div className='bet-button'>Bet</div>
                                    <div className='raise-button'>Raise</div>
                                </div>
                            </div>
                            <div className='check-button'>Check</div>
                            <div className='call-button'>Call</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
