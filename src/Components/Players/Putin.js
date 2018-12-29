import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return {
            name: '',
            activePlayer: false,
            chipCount: 200,
            position: '',
            hand: [{suit: '', name: ''}],
            action: {
                folded: false,
                raised: false,
                checked: false,
                called: false,
                bet: false
            },

        };
    }
}