    $(function() {

      $('.card').on('click', function(event) {
        // var $card = $(event.currentTarget);
        var $card = $(this);
        // var color = $card.data('color');
        $card.addClass('flipped');

        if ($('#memory-game .card.flipped').size() == 2) {
          // handle second click
          var $otherCard = $('#memory-game .card.flipped').not($card);
          if ($otherCard.data('color') == $card.data('color')) {
            console.log('MATCH!');
          } else {
            console.log('FAIL!');
            setTimeout(function() {
              $('#memory-game .card.flipped').removeClass('flipped');
            }, 2000);
          }
        }
      });

      // $(window).on('mousemove', function(event) {
      //   console.log(event.screenX, event.screenY);
      // });
      
    });