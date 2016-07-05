'use strict';

$(document).ready(function() {
  // Put app logic here
  var $block = null;

  $('[data-stack]').click(function() {
    var $children = $(this).children();
    if ($block !== null) {
      if (($children.length === 0) || ($block.data('block') < $children.last().data('block'))) {
        $(this).append($block);
        $block = null;
      }
    }
    else if ($children.length > 0) {
      $block = $children.last();
      $block.detach();
    }

    checkForWin();
  });

  function checkForWin() {
    $('[data-stack]').each(function () {
      if (($(this).data('stack') > 1) && ($(this).children().length === 4)) {
        $('#announce-game-won').text('You Won!');
      }
    });
  }
});
