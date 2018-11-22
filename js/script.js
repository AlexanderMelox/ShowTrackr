$(document).ready(function() {

  // Dark mode for community
  $('[data-waypoint="community"]').waypoint(function(direction) {
    if (direction === 'down') {
      $('nav').addClass('dark-mode');
    } else {
      $('nav').removeClass('dark-mode');
    }
  }, {
    offset: '50px'
  });

});