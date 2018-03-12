export function memory() {
  var grid = $('#memory-grid'),
    activeCards = [];

function checkActiveCards(){
    var valid = (activeCards[0].data('cardId') == activeCards[1].data('cardId'))

    if (valid){
        setTimeout(function(){cleanActiveCards(true)}, 500);
    } else {
        setTimeout(cleanActiveCards, 2500);
    }
}

function cleanActiveCards(toggleCorrect){
      var classes = 'check' + (toggleCorrect?' correct': '');

      activeCards[0].toggleClass(classes);
      activeCards[1].toggleClass(classes);

      activeCards.length = 0;
  }

  grid.on('click', 'li.card', function(){
      var self = $(this);

      if(activeCards.length == 2 || self.is('.check') || self.is('.correct')) return;

      activeCards.push(self.addClass('check'));
      if (activeCards.length === 2) checkActiveCards();
  });
}
