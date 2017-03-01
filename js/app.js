//Problem: User when clicking on image goes to dead end
//Solution: Create an overlay with the large image - lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

//2. Add overlay
$("body").append($overlay);
  //2.1 An image
  //2.2 A caption
$overlay.append($caption);


//1. Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
 // update overlay with the image linked in the link
  $image.attr("src", imageLocation);

  // Show the overlay
  $overlay.show();
  //1.3 get child's alt atribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});


//3. When overlay is clicked
$overlay.click(function(){

//3.1 Hide overlay
  $(this).hide();

});
