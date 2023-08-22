$( document ).ready(function() {

  var $container;
  var filters = {};
  
  $(function(){
  
    $container = $('#container');
    // if (window.console) console.log($container);
    $container.isotope();
    // do stuff when checkbox change
    $('#options').on( 'change', function( jQEvent ) {
      var $checkbox = $( jQEvent.target );
      manageCheckbox( $checkbox ); // отправили массив чекбоксов

      var comboFilter = getComboFilter( filters );
      $container.isotope({ filter: comboFilter });
    });
  });
  
  
  function getComboFilter( filters ) {
    var i = 0;
    var comboFilters = [];
    var message = [];
  
    for ( var prop in filters ) {
      message.push( filters[ prop ].join(' ') );
      var filterGroup = filters[ prop ];
      // перейти к следующей группе фильтров, если в ней нет значений
      if ( !filterGroup.length ) {
        continue;
      }
      if ( i === 0 ) {
        // copy to new array
        comboFilters = filterGroup.slice(0);
      } else {
        var filterSelectors = [];
        // copy to fresh array
        var groupCombo = comboFilters.slice(0); // [ A, B ]
        // merge filter Groups
        for (var k=0, len3 = filterGroup.length; k < len3; k++) {
          for (var j=0, len2 = groupCombo.length; j < len2; j++) {
            filterSelectors.push( groupCombo[j] + filterGroup[k] ); // [ 1, 2 ]
          }
  
        }
        // apply filter selectors to combo filters for next group
        comboFilters = filterSelectors;
      }
      i++;
    }
  
    var comboFilter = comboFilters.join(', ');
    return comboFilter;
  }
  
  function manageCheckbox( $checkbox ) {
    var checkbox = $checkbox[0];
  
    var group = $checkbox.parents('.option-set').attr('data-group');
    // создать массив для группы фильтров, если его еще нет
    var filterGroup = filters[ group ];
    if ( !filterGroup ) {
      filterGroup = filters[ group ] = [];
    }
  
    var isAll = $checkbox.hasClass('all');
    // сбросить группу фильтров, если был установлен флажок «все»
    if ( isAll ) {
      delete filters[ group ];
      if ( !checkbox.checked ) {
        checkbox.checked = 'checked';
      }
    }
    // index of
    var index = $.inArray( checkbox.value, filterGroup );
  
    if ( checkbox.checked ) {
      var selector = isAll ? 'input' : 'input.all';
      $checkbox.siblings( selector ).removeAttr('checked');
  
  
      if ( !isAll && index === -1 ) {
        // add filter to group
        filters[ group ].push( checkbox.value );
      }
  
    } else if ( !isAll ) {
      // remove filter from group
      filters[ group ].splice( index, 1 );
      // if unchecked the last box, check the all
      if ( !$checkbox.siblings('[checked]').length ) {
        $checkbox.siblings('input.all').attr('checked', 'checked');
      }
    }
  }

});


    // document.getElementById('options').addEventListener('click', () => {
    //   let allTab = document.getElementById('all');
    //   let repairTab = document.getElementById('repair');
    //   let constructionTab = document.getElementById('construction');
    //   let designTab = document.getElementById('design');
    //   let planningTab = document.getElementById('planning');
      
    //   if (allTab.checked) {
    //     repairTab.checked = false;
    //     constructionTab.checked = false;
    //     designTab.checked = false;
    //     planningTab.checked = false;
    //   }
  
    //   if (constructionTab.checked || repairTab.checked || designTab.checked || planningTab.checked) {
    //     allTab.checked = false;
    //   }
    // })


    // $('#more').click(function() {
    //   console.log(467675)
    // });