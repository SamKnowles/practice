import React from 'react'


function card(value, name, suit) {
    this.value = value;
    this.name = name;
    this.suit = suit;
}

function deck() {
    this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    var cards = [];

    for (var s = 0; s < this.suits.length; s++) {
        for (var n = 0; n < this.names.length; n++) {
            cards.push(new card(n + 1, this.names[n], this.suits[s]));
        }
    }

    return cards;
}


export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    render() {
        return (
            <div>
                <div className="table-container">
                    <div className="table-item1">1</div>
                    <div className="table-item2">2</div>
                    <div className="table-item3">3</div>
                    <div className="table-item4">4</div>
                    <div className="table-item5">5</div>
                    <div className="table-item6">6</div>
                    <div className="table-item7">7</div>
                    <div className="table-item8">8</div>
                    <div className="table-item9">9</div>
                    <div className="table-item10">10</div>
                    <div className="table-item11">11</div>
                    <div className="table-item12">12</div>
                    <div className="table-item13">13</div>
                    <div className="table-item14">14</div>
                    <div className="table-item15">15</div>
                    <div className="table-item16">16</div>
                </div>
            </div>
        )
    }
}
