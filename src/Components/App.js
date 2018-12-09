import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Nav from './Nav'
import PreFlop from './PreFlop'
import Table from './Table'
import CallingHands from './CallingHands'

import '../Styles/App.css';
import '../Styles/PreFlop.css';
import '../Styles/Table.css';
import '../Styles/Nav.css';
import '../Styles/CallingHands.css';
import '../Styles/Table.css';

function App() {
    return (

        <div className='app-wrapper'>
            <Nav />
            <Switch>
                <Route exact path='/' component={CallingHands}></Route>
                <Route path='/PreFlop' component={PreFlop}></Route>
                <Route path='/Table' component={Table}/>
            </Switch>
        </div>
    )
}

export default App
