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
// Destination images to be perused by visitor
var image1;
var image2;
var image3;

$(document).ready(function(){
  $("#assess").submit(function(event){
    // Hold off on form submission events until submit button is clicked
    event.preventDefault();
    // Store user input in our global variables
    // If user doesn't provide name, set a respectful reference
    if ($("#visitor").val()==="") {
      visitor = "my dearest visitor";
    }
    else {
      visitor = $("#visitor").val();
    }
    // Store preferences
    temp = $("#temperature").val();
    land = $("input:radio[name=landscape]:checked").val();
    lodge = $("#lodging").val();
    color = $("#color").val();
    month = $("#departure").val();

    // Call function to take temp and land values and return 3 suggested destinations
    determineSuggestions(temp, land);

    // Set image suggestions
    // TODO

    // On submit, build display
    // Include visitor name
    $("#visitorName").text(visitor);
    // Include destination suggestions
    $("ul#suggestions").append("<li>" + suggest1 + "</li>");
    $("ul#suggestions").append("<li>" + suggest2 + "</li>");
    $("ul#suggestions").append("<li>" + suggest3 + "</li>");
    // Display suggestions list and images
    $(".displaySuggestions").show();
    $("#clearSuggestions").show();
    $("#image1").show();
    $("#image2").show();
    $("#image3").show();
  })

  // Clear out the suggestion list, hide the contents of the jumbotron
  $("#clearSuggestions").click(function(event){
    $("li").remove();
    // $("#displayText").hide();
    // $(this).hide();
    $(".displaySuggestions").hide();
  })



  // Function to determine 3 suggested destinations based on temperature and landscape preferences
  var determineSuggestions = function(temp, land) {
    // If weather & land aren't that important, they should possibly stay near by
    if (temp==="ignore" && land==="ignore") {
      suggest1 = "Maybe stay home?"
      suggest2 = "Your neighbors next door?"
      suggest3 = "A nearby hotel?"
    }
    // Set hot temperature preferences
    if (temp==="hot" && land==="water") {
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
    if (temp==="cold" && land==="water") {
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
      suggest3 = "Cold and Urban";
    }

    // Set temperate suggestions
    if (temp==="temperate") {
      suggest1 = "Seattle";
      suggest2 = "Seattle";
      suggest3 = "Seattle, Washington (that's right, Seattle is the temperate climate that has it all!)"
    }
    return (suggest1, suggest2, suggest3);
  }



})
