export default class Player {
        constructor(name, activePlayer, chipCount, position) {
            this.name = '';
            this.activePlayer = false;
            this.chipCount = 200;
            this.position = '';
            this.hand = [{suit: '', name: ''}];
            this.action = {
                folded: false,
                raised: false,
                checked: false,
                called: false,
                bet: false
            };
        }
        takeTurn(action) {
        }
}

