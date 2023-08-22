$( function() {
  var $container = $('#container').isotope({
    itemSelector: '.portfolio__item'
  });

  // filter with selects and checkboxes
  var $selects = $('#form-ui select');
  var $checkboxes = $('#form-ui input');
  
  $selects.add( $checkboxes ).change( function() {
    // map input values to an array
    var exclusives = [];
    var inclusives = [];
    // exclusive filters from selects
    $selects.each( function( i, elem ) {
      if ( elem.value ) {
        exclusives.push( elem.value );
      }
    });
    // inclusive filters from checkboxes
    $checkboxes.each( function( i, elem ) {
      // if checkbox, use value if checked
      if ( elem.checked ) {
        inclusives.push( elem.value );
      }
    });
    document.querySelectorAll('.portfolio__check').forEach(element => {
      if (element.checked === true) {
        $('#reset-checkboxes').removeClass('active');
        // console.log($('#reset-checkboxes'));
      }
      
    });
    // combine exclusive and inclusive filters

    // first combine exclusives
    exclusives = exclusives.join('');
    
    var filterValue;
    if ( inclusives.length ) {
      // map inclusives with exclusives for
      filterValue = $.map( inclusives, function( value ) {
        return value + exclusives;
      });
      filterValue = filterValue.join(', ');
    } else {
      filterValue = exclusives;
    }

    $container.isotope({ filter: filterValue })
  });

  // uncheck checkboxes
  $('#reset-checkboxes').click( function() {   
    document.querySelectorAll('.portfolio__check').forEach(element => {
      element.checked = false;
    });
    $checkboxes.attr( 'checked', false ).change();
    $(this).addClass('active');
  });
  

});