$("form").submit(function(e) {
  e.preventDefault();
  var $searchField = $('#search');
  var $submitButton = $('#submit');

  $searchField.prop("disabled", true);
  $submitButton.attr("disabled", true).val("searching...");
  var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var animal = $searchField.val();
  var flickrOptions = {
    tags: animal,
    format: "json"
  };
  var displayPhotos = function(data) {
    var photoHTML = '<ul>';
    $.each(data.items, function(i, photo) {
      photoHTML += '<li class="grid-25 tablet-grid-50">';
      photoHTML += '<a href="' + photo.link + '" class="image">';
      photoHTML += '<img src="' + photo.media.m + '"></a></li>';
    });
    photoHTML += '</ul>';
    $('#photos').html(photoHTML);
    $searchField.prop("disabled", false);
    $submitButton.attr("disabled", false).val("Search");
  }
  $.getJSON(flickrAPI, flickrOptions, displayPhotos);
});
