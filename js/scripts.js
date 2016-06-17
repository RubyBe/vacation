

$(document).ready(function(){
  $("button#preferences").click(function(event){
    var temp = $("#temperature").val();
    var land = $("input:radio[name=landscape]:checked").val();
    var lodge = $("#lodging").val();
    var color = $("#color").val();
    var month = $("#departure").val();
  })
})
