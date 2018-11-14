$(document).ready(function() {
  window.dancers = [];

  console.log(window.dancers);

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
  var lineMaker = function(dancers) {
    for(var i = 0; i < dancers.length; i ++) {
      console.log(dancers[i]);
      dancers[i].lineUp();
    }
  }
  

  $('.makeLineButton').on('click', function(event) {
    var lineMakerFunctionName = $(this).data('line-maker-function-name');
    var lineMakerFunction = window[lineMakerFunctionName];
    lineMaker(window.dancers);

  });

  ////////////////////////////////
  // shuffle function tbc
  ////////////////////////////////
  // var shuffler = function(dancers) {
  //   for(var i = 0; i < dancers.length; i ++) {
  //     dancers[i].shuffle();
  //   }
  // }

  // $('.shuffleButton').on('click', function(event) {
  //   var shufflerFunctionName = $(this).data('shuffler-function-name');
  //   var shufflerFunction = window[shufflerFunctionName];
  //   shuffler(window.dancers);

  // });

  ////////////////////////////////
  // dance battle function tbc
  ////////////////////////////////

  // var getPosition = function(element) {
  //   var position = element.$node.getBoundingClientRect();
  //   return {
  //     x: position.left + posiiton.width / 2,
  //     y: position.left + posiiton.height / 2
  //   };
  // };

  // var findDistance = function(a, b) {
  //   var aPosition = getPosition(a);
  //   var bPosition = getPosition(b);

  //   return Math.sqrt(
  //     Math.pow(aPosition.x - bPosition.x, 2) + Math.pow(aPosition.y - bPosition.y, 2)
  //   );
  // }

  // var minDistance = Number.POSITIVE_INFINITY;
  // var dancer1;
  // var dancer2;

  // var partnerDance = function(dancers) {
  //   for (var i = 0; i < dancers.length; i++) {
  //     for (var j = i + 1; j < dancers.length; j++) {
  //       if (findDistance(dancers[i], dancers[j]) < minDistance) {
  //         minDistance = findDistance(dancers[i], dancers[j]);
  //         dancer1 = dancers[i];
  //         dancer2 = dancers[j];
  //       }
  //     }
  //   }
  //   dancer1.party();
  //   dancer2.party();
  // }
  
  // $('.partnerDancingButton').on('click', function(event) {
  //   var partnerDancingFunctionName = $(this).data('partner-dancing-function-name');
  //   var partnerDancingFunction = window[partnerDancingFunctionName];
  //   partnerDance(window.dancers);
  // });
  


});

