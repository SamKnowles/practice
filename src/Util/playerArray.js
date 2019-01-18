let playerArray = [
    {
        className: 'drake-seat',
        name: 'Drake',
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
        },
        imgUrl: require('../Pictures/Drake.png')
    },
    {
        className: 'neo-seat',
        name: 'Neo',
        activePlayer: false,
        chipCount: 200,
        position: 1,
        hand: [{ suit: 'Spades', value: 'Ace' },
        { suit: 'Clubs', value: 'Ace' }],
        action: {
            folded: false,
            raised: false,
            checked: false,
            called: false,
            bet: false
        },
        imgUrl: require('../Pictures/Neo.png')
    },
    {
        className: 'kim-seat',
        name: 'Kim',
        activePlayer: false,
        chipCount: 200,
        position: 2,
        hand: [{ suit: 'Spades', value: 'Ace' },
        { suit: 'Clubs', value: 'Ace' }],
        action: {
            folded: false,
            raised: false,
            checked: false,
            called: false,
            bet: false
        },
        imgUrl: require('../Pictures/StoicKim.png')
    },
    {
        className: 'pointy-kim-seat',
        name: 'Pointy Kim',
        activePlayer: false,
        chipCount: 200,
        position: 3,
        hand: [{ suit: 'Spades', value: 'Ace' },
        { suit: 'Clubs', value: 'Ace' }],
        action: {
            folded: false,
            raised: false,
            checked: false,
            called: false,
            bet: false
        },
        imgUrl: require('../Pictures/PointingKim.png')
    },
    {
        className: 'kimmy-seat',
        name: 'Kimmy',
        activePlayer: false,
        chipCount: 200,
        position: 4,
        hand: [{ suit: 'Spades', value: 'Ace' },
        { suit: 'Clubs', value: 'Ace' }],
        action: {
            folded: false,
            raised: false,
            checked: false,
            called: false,
            bet: false
        },
        imgUrl: require('../Pictures/StoicKim.png')
    },
    {
        className: 'borat-seat',
        name: 'Borat',
        activePlayer: false,
        chipCount: 200,
        position: 5,
        hand: [{ suit: 'Spades', value: 'Ace' },
        { suit: 'Clubs', value: 'Ace' }],
        action: {
            folded: false,
            raised: false,
            checked: false,
            called: false,
            bet: false
        },
        imgUrl: require('../Pictures/Borat.png')
    },
    {
        className: 'et-seat',
        name: 'ET',
        activePlayer: false,
        chipCount: 200,
        position: 6,
        hand: [{ suit: 'Spades', value: 'Ace' },
        { suit: 'Clubs', value: 'Ace' }],
        action: {
            folded: false,
            raised: false,
            checked: false,
            called: false,
            bet: false
        },
        imgUrl: require('../Pictures/ET.png')
    },
    {
        className: 'oscar-seat',
        name: 'Oscar',
        activePlayer: false,
        chipCount: 200,
        position: 7,
        hand: [{ suit: 'Spades', value: 'Ace' },
        { suit: 'Clubs', value: 'Ace' }],
        action: {
            folded: false,
            raised: false,
            checked: false,
            called: false,
            bet: false
        },
        imgUrl: require('../Pictures/Oscar.png')
    },
    {
        className: 'leno-seat',
        name: 'Leno',
        activePlayer: false,
        chipCount: 200,
        position: 8,
        hand: [{ suit: 'Spades', value: 'Ace' },
        { suit: 'Clubs', value: 'Ace' }],
        action: {
            folded: false,
            raised: false,
            checked: false,
            called: false,
            bet: false
        },
        imgUrl: require('../Pictures/Putin.png')
    },
    {
        className: 'putin-seat',
        name: 'Putin',
        activePlayer: false,
        chipCount: 200,
        position: 9,
        hand: [{ suit: 'Spades', value: 'Ace' },
        { suit: 'Clubs', value: 'Ace' }],
        action: {
            folded: false,
            raised: false,
            checked: false,
            called: false,
            bet: false
        },
        imgUrl: require('../Pictures/Leno.png')
    },
];

module.exports = {playerArray};

//module.exports can only return an object or a function -Nate, no doubt in his mind about this//