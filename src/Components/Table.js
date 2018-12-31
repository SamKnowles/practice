import React from 'react'
import Putin from '../Components/Players/Putin'
import Borat from '../Components/Players/Borat'
import Drake from '../Components/Players/Drake'
import ETGame from '../Components/Players/Putin'
import Neo from '../Components/Players/Neo'
import Kim from '../Components/Players/Kim'
import Leno from '../Components/Players/Leno'
import LowerKim from '../Components/Players/Putin'
import OscarGame from '../Components/Players/Putin'
import PointyKim from '../Components/Players/PointyKim'
import WeirdKim from '../Components/Players/Putin'

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
                        <PointyKim />
                        <Kim />
                        <Borat />
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
                        <Neo />
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
                        <Drake />
                        <Leno />
                        <Putin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
