const tic_tac_toe = {

    board = ['','','','','','','','',''],

    players_change: {
      options = ['X','O'],
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
    }

    playing(position) {
        if ( this.game_over || this.board[position] !== '' ) return false
        
        const currentPlayer = this.players_change.options[this.players_change.turn_option] 
        this.board[position] = currentPlayer
        this.add_to_the_board()

        const winning_sequences_index = this.check_winning_sequences(currentPlayer)
    }


}