$(function () {

  // $('#titleText').animate({display:block}, 1000);


  $('.navbar-toggler').on('click', function(event) {
  		event.preventDefault();
  		$(this).closest('.navbar-minimal').toggleClass('open');
    });

  $('#addSearchBar').on('click', function(){
    $('.wrap').show();
  });

  $('#removeSearchBar').on('click', function(){
    $('.wrap').hide();
  });

  $('#currentLocation').on('click', function(){
    initMap();
  });

  $('#searchButton').on('click', () => {
    var searchInput = document.getElementById('locSearch');
    var autoComplete = new google.maps.places.Autocomplete(searchInput);
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params:{
        address: searchInput.value,
        key: 'AIzaSyAc8lau9M2vunyZZApo1WvK2SB_6jWdp3Y'
      }
    }).then(function(response){
      // log full response
      var latitude = response.data.results[0].geometry.location.lat;
      var longitude = response.data.results[0].geometry.location.lng;
      drawMapWithMarker(parseFloat(latitude), parseFloat(longitude));

      // Formatted version of the response
      // console.log(response.data.results[0].);
    }).catch(function(err){
      console.log(err);
    });
  });


});
