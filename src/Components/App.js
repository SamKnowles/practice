import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Nav from './Nav'
import Landing from './Landing'
import PreFlop from './PreFlop'
import Maths from './Maths'
import Table from './Table'
import CallingHands from './CallingHands'

import '../Styles/PreFlop.css';
import '../Styles/Table.css';
import '../Styles/Nav.css';
import '../Styles/CallingHands.css';

function App() {
    return (

        <div className='app-wrapper'>
            <Nav />
            <Switch>
                <Route exact path='/' component={CallingHands}></Route>
                <Route path='/landing' compontnet={Landing} ></Route>
                <Route path='/PreFlop' component={PreFlop}></Route>
                <Route path='/Maths' component={Maths}></Route>
            </Switch>
        </div>
    )
}

export default App
