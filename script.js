const tic_tac_toe = {

    // ATRIBUTER
    board: ['','','','','','','','',''],
    players_change: {
                      options: ['X','O'],
                      turn_option: 0,
                      change(){
                      this.turn_option = ( this.turn_option === 0 ? 1:0 )
                      }
                    },

    game_over: false,
    board_elements: null,
    winning_sequences: [
                            [0,1,2],
                            [3,4,5],
                            [6,7,8],
                            [0,3,6],
                            [1,4,7],
                            [2,5,8],
                            [0,4,8],
                            [2,4,6]
                        ],

    //----------------------------------------// 
    // Functions

    init(container) {
        this.board_elements = container
    },

    playing(position) {
        if ( this.game_over || this.board[position] !== '' ) return false
        
        const currentPlayer = this.players_change.options[this.players_change.turn_option] 
        this.board[position] = currentPlayer
        this.add_to_the_board()

        const winning_sequences_index = this.check_winning_sequences(currentPlayer)
        if (this.is_game_over()) {
            this.game_is_over()
        }
        if ( winning_sequences_index >= 0 ) {
            this.game_is_over()
            this.stylize_winner_sequence(this.winning_sequences[winning_sequences_index])
        }
        else {
            this.players_change.change()
        }

        return true
    },
    
    stylize_winner_sequence(winner_sequence) {
        winner_sequence.forEach((position) => {
          this
            .board_elements
            .querySelector(`div:nth-child(${position + 1})`)
            .classList.add('winner')
        })
      },

    check_winning_sequences(player) {

        for ( i in this.winning_sequences ) {
            if (this.board[ this.winning_sequences[i][0] ] == player  &&
                this.board[ this.winning_sequences[i][1] ] == player &&
                this.board[ this.winning_sequences[i][2] ] == player) {
                console.log('winning sequences INDEX:' + i)
                return i
            }
        }
        return -1
    },

    game_is_over() {
        this.game_over = true,
        console.log('Game Over')
    },

    is_game_over() {
        return !this.board.includes('');
    },

    start() {
        this.board.fill('')
        this.add_to_the_board()
        this.game_over = false   
    },

    restart() {
        if (this.is_game_over() || this.game_over) {
            this.start()
            console.log('this game has been restarted!')
        } else if (confirm('Are you sure you want to restart this game?')) {
            this.start()
            console.log('this game has been restarted!')
        }
    },

    add_to_the_board() {
        this.board_elements.innerHTML = this.board.map((element, index) => `<div onclick="tic_tac_toe.playing('${index}')"> ${element} </div>`).reduce((content, current) => content + current)
    },

}