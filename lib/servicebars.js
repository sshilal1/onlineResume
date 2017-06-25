   
function makeBars(skills,location) {

  for (var skill in skills) {

  var bars = skills[skill]/2.5; 
  var sportStr = '<div class="sport">';

  var barStr = sportStr + '<div class="sbars-' + style + '">';

  for (i=1;i<=4;i++){
    barStr += '<div class="bar-' + style + ' b' + i;

    if (i<=bars) {
      barStr += ' fill-' + style + '"></div>';
    }
    else {
      barStr += '"></div>';
    }
  }

  barStr += '</div><div class="sport-title">' + skill + '</div></div>';

  $("#"+location).append(barStr);
  }
}

var favorites = {
  "JavaScript": 10,
  "HTML": 10,
  "CSS": 10,
  "jQuery": 10,
  "Socket.io": 10,
  "InteractJS": 9,
  "FlexBox": 9,
  "Node": 9,
  "Express": 7,
  "AWS EC2": 7,
  "MySQL": 7,
  "PHP": 7,
}

var neighborhoodMap = {
  "JS, HTML, CSS": 10,
  "jQuery": 10,
  "KnockoutJs": 10,
  "Ajax": 9,
  "Express": 7,
}

var dashBoard = {
  "JavaScript": 10,
  "HTML": 10,
  "CSS": 10,
  "Bootstrap": 9,
  "PhotoShop": 7,
  "Dreamweaver": 7,
}

var style = "grey-anim";
var locations = ["pitch-bars","map-bars","dash-bars"];

makeBars(favorites,locations[0]);
makeBars(neighborhoodMap,locations[1]);
makeBars(dashBoard,locations[2]);