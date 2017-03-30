 $('li button').click(function () {
    // highlight the button
    $("button").removeClass("selected");
    $(this).addClass("selected");

    // AJAX Flickr Call
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var jewelry = $(this).val();
    var flickrOptions = {
      tags: jewelry,
      format: "json",
      tag_mode: 'all',
      text: 'silver, jewelry',
      safe_search: '1',
      sort: "relevance",
      content_type: '1'
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click
