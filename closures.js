function blackjack(array) {
  // Card position in the array
  var card = 0
  function dealer(x, y) {
    // Dealer sets up current player
    var playerTotal = 0
    var bust = false
    function player() {
      if (playerTotal === 0) {
        // First round for this player
        playerTotal = x + y
        console.log(playerTotal)
      } else {
        var currentCard = array[(card)]
        playerTotal = playerTotal + currentCard
        if (playerTotal <= 21){
          console.log(playerTotal)
          // Increment to the next card to play in the stack
          card++
        } else if (playerTotal > 21 && !bust) {
          console.log('bust')
          bust = true
          // Increment to the next card to play in the stack
          card++
        } else {
          console.log('you are done!')
        }
      }
    }
    return player
  }
  return dealer
}

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
i_like_to_live_dangerously(); // => should log 9
i_like_to_live_dangerously(); // => should log 11
i_like_to_live_dangerously(); // => should log 17
i_like_to_live_dangerously(); // => should log 18
i_like_to_live_dangerously(); // => should log 'bust'
i_like_to_live_dangerously(); // => should log 'you are done!'
i_like_to_live_dangerously(); // => should log 'you are done!'

// /*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
i_TOO_like_to_live_dangerously(); // => should log 4
i_TOO_like_to_live_dangerously(); // => should log 15
i_TOO_like_to_live_dangerously(); // => should log 19
i_TOO_like_to_live_dangerously(); // => should log 'bust'
i_TOO_like_to_live_dangerously(); // => should log 'you are done!
i_TOO_like_to_live_dangerously(); // => should log 'you are done!

// /*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
i_ALSO_like_to_live_dangerously(); // => should log 10
i_ALSO_like_to_live_dangerously(); // => should log 13
i_ALSO_like_to_live_dangerously(); // => should log 'bust'
i_ALSO_like_to_live_dangerously(); // => should log 'you are done!
i_ALSO_like_to_live_dangerously(); // => should log 'you are done!
