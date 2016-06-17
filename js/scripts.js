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
    // Set first suggestion
    if (temp==="hot" && land==="water") {
      suggest1 = "San Diego"
    }
    else if (temp==="hot" && land==="bluesky") {
      suggest1 = "Death Valley"
    }
    else if (temp==="hot" && land==="mountains") {
      suggest1 = "Reno, Nevada";
    }
    else if (temp==="hot" && land === "urban"){
      suggest1="Phoenix, Arizona";
    }

    // Set second suggestion
    if (temp==="cold" && land==="water") {
      suggest2 = "Anchorage, Alaska"
    }
    else if (temp==="cold" && land==="bluesky") {
      suggest2 = "Siberia"
    }
    else if (temp==="cold" && land==="mountains") {
      suggest2 = "Everest";
    }
    else if (temp==="cold" && land === "urban"){
      suggest2 = "Moscow";
    }

    // Set third suggestion
    if (temp==="temperate") {
      suggest3 = "Seattle, Washington (that's right, Seattle has it all!)"
    }
    console.log(suggest1 + ":" + suggest2 + ":" + suggest3);
  })


})
