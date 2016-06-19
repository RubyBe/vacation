// Declare global variables

// Name for our visitor
var visitor;
// Traits for which visitor may have preferences
var temp;
var land;
var lodge;
var color;
var month;
// Destination suggestions to be returned
var suggest1;
var suggest2;
var suggest3;
// Variables to hold tags to build the image reference
// var imageLocation;
var imageLoc1;
var imageLoc2;
var imageLoc3;

// *************************************************
// USER INTERFACE LOGIC

$(document).ready(function(){
  $("#assess").submit(function(event){
    // Hold off on post-form-submission events until submit button is clicked
    event.preventDefault();

    // Store user input in global variables
    visitor = $("#visitor").val();
    temp = $("#temperature").val();
    land = $("input:radio[name=landscape]:checked").val();
    lodge = $("#lodging").val();
    color = $("#color").val();
    month = $("#departure").val();

    // Call function to take temp and land values and return 3 suggested destinations
    determineSuggestions(temp, land);

    // Call function to set destination images
    imageLoc1 = setImageLocs(suggest1);
    imageLoc2 = setImageLocs(suggest2);
    imageLoc3 = setImageLocs(suggest3);

    // On submit, build display
    // Include visitor name by calling function to set visitor display name
    $("#visitorName").text(setVisitor(visitor));
    // Include destination suggestions
    $("ul#suggestions").append("<li>" + suggest1 + "</li>");
    $("ul#suggestions").append("<li>" + suggest2 + "</li>");
    $("ul#suggestions").append("<li>" + suggest3 + "</li>");
    // Display image gallery
    // TODO
    // Refactor this section using attr()
    $("ul#imageGallery").append('<li><a href="' + imageLoc1 + '"><img src="' + imageLoc1 + '" width="300" alt="destination photo"></a></li>');
    $("ul#imageGallery").append('<li><a href="' + imageLoc2 + '"><img src="' + imageLoc2 + '" width="300" alt="destination photo"></a></li>');
    $("ul#imageGallery").append('<li><a href="' + imageLoc3 + '"><img src="' + imageLoc3 + '" width="300" alt="destination photo"></a></li>');
    // Display the suggestions list and the button to allow visitor to clear and start again
    $(".displaySuggestions").show();
    $("#clearSuggestions").show();
  })

  // Clear out the suggestion list, hide the contents of the jumbotron
  $("#clearSuggestions").click(function(event){
    $("li").remove();
    // $("#displayText").hide();
    // $(this).hide();
    $(".displaySuggestions").hide();
  })
})

// *************************************************
// BUSINESS LOGIC

// Function to set visitor reference
// If user doesn't provide name, set a respectful reference
var setVisitor = function(name) {
  if (name === "") {
    newName = "my dear visitor";
  }
  else {
    newName = $("#visitor").val();
  }
  return newName;
}

// Function to determine 3 suggested destinations based on temperature and landscape preferences
var determineSuggestions = function(temp, land) {
  // If weather & land aren't that important, they should possibly stay near by
  if (temp==="ignore" && land==="ignore") {
    suggest1 = "your own home?"
    suggest2 = "your neighbors next door?"
    suggest3 = "a nearby hotel?"
  }
  // Set hot temperature preferences
  if (temp==="hot" && land==="water" || temp==="hot" && land==="ignore") {
    suggest1 = "San Diego"
    suggest2 = "Rio de Janiero"
    suggest3 = "Veracruz"
  }
  else if (temp==="hot" && land==="bluesky") {
    suggest1 = "Death Valley"
    suggest2 = "Monterey, Mexico"
    suggest3 = "Timbucktu"
  }
  else if (temp==="hot" && land==="mountains") {
    suggest1 = "Reno, Nevada";
    suggest2 = "Yakima, Washington";
    suggest3 = "Tuscon, Arizona";
  }
  else if (temp==="hot" && land === "urban"){
    suggest1 = "Phoenix, Arizona";
    suggest2 = "Mumbai, India";
    suggest3 = "Atlanta, Georgia";
  }
  // Set cold temperature preferences
  if (temp==="cold" && land==="water" || temp==="cold" && land == "ignore") {
    suggest1 = "Anchorage, Alaska";
    suggest2 = "Antartica";
    suggest3 = "Southern tip of Chile";
  }
  else if (temp==="cold" && land==="bluesky") {
    suggest1 = "Siberia";
    suggest2 = "North Central Canada";
    suggest3 = "Cold and Blue";
  }
  else if (temp==="cold" && land==="mountains") {
    suggest1 = "Everest";
    suggest2 = "Alps";
    suggest3 = "Mt. Rainier"
  }
  else if (temp==="cold" && land === "urban"){
    suggest1 = "Moscow";
    suggest2 = "Montreal";
    suggest3 = "St. Petersburg";
  }
  // Set temperate suggestions
  if (temp==="temperate") {
    suggest1 = "Seattle";
    suggest2 = "Seattle";
    suggest3 = "Seattle, Washington (that's right, Seattle is the temperate climate that has it all!)"
  }
  return (suggest1, suggest2, suggest3);
}

// Function accepts location and returns href/src for an image representative of that location
var setImageLocs = function(suggestion){
  if (suggestion === "Seattle") {
    imageLocation="https://upload.wikimedia.org/wikipedia/commons/2/2f/Space_Needle002.jpg";
  }
  else if (suggestion === "Everest") {
    imageLocation="https://upload.wikimedia.org/wikipedia/commons/c/c7/Mount-Everest.jpg";
  }
  else if (suggestion === "Alps") {
    imageLocation="https://upload.wikimedia.org/wikipedia/commons/8/82/Mont_Blanc_oct_2004.JPG";
  }
  else if (suggestion === "Mt. Rainier") {
    imageLocation="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mount_Rainier_from_the_Silver_Queen_Peak.jpg/1280px-Mount_Rainier_from_the_Silver_Queen_Peak.jpg";
  }
  else if (suggestion === "Moscow") {
    imageLocation="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/MSK_Collage_2015.png/800px-MSK_Collage_2015.png";
  }
  else if (suggestion === "Montreal") {
    imageLocation="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Montreal_Montage_July_7_2014.jpg/800px-Montreal_Montage_July_7_2014.jpg";
  }
  else if (suggestion === "St. Petersburg") {
    imageLocation="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/SPB_Collage_2014-3.png/800px-SPB_Collage_2014-3.png";
  }
  else {
    imageLocation="https://upload.wikimedia.org/wikipedia/commons/2/2f/Space_Needle002.jpg"
  }
  return imageLocation;
}
