var temp;
var land;
var lodge;
var color;
var month;
var suggest1;
var suggest2;
var suggest3;

$(document).ready(function(){
  $("button#preferences").click(function(event){
    temp = $("#temperature").val();
    land = $("input:radio[name=landscape]:checked").val();
    lodge = $("#lodging").val();
    color = $("#color").val();
    month = $("#departure").val();
    // event.preventDefault();

    // If things aren't that important, they should possibly stay near by
    if (temp==="ignore" && land==="ignore" && lodge==="ignore") {
      suggest1 = "Maybe stay home?"
      suggest2 = "Or with your neighbors next door?"
      suggest3 = "Or at a hotel nearby?"
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

    // set temperate suggestions
    if (temp==="temperate") {
      suggest1 = "Seattle";
      suggest2 = "Seattle";
      suggest3 = "Seattle, Washington (that's right, Seattle has it all!)"
    }

    // Build display list
    $("ul#suggestions").prepend("<li>" + suggest1 + "</li>");
    $("ul#suggestions").prepend("<li>" + suggest2 + "</li>");
    $("ul#suggestions").prepend("<li>" + suggest3 + "</li>");
  })


})
