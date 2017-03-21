##AJAX experiment

The idea for this came from the [AJAX Basics](https://teamtreehouse.com/library/ajax-basics) course on Treehouse.

If you're planning to clone the files and develop locally, please keep in mind that you must have a local web server running locally. This might work if you have Python installed:

```bash
python -m SimpleHTTPServer 8000
```

In the `flickr` directory houses the main project. However, it might be interesting to glance at the different JavaScript files (in both the root directory *and* the `ajax2` directory): compare `script.js` with `jquery-ajax.js`, and `widget.js` with `jquery-widget.js`. The jQuery counterpart executes the same (or roughly the same) actions, but in fewer lines.

If you'd like to view the main flickr project live, please visit [https://jeffreysbrother.github.io/ajax/flickr/](https://jeffreysbrother.github.io/ajax/flickr/). The associated jQuery code is as follows:

```js
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
```
