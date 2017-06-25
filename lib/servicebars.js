   
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
  "JS, HTML, CSS": 10,
  "jQuery": 10,
  "Socket.io": 10,
  "InteractJS": 9,
  "FlexBox": 9,
  "Node": 9,
  "Express": 9,
  "AWS EC2": 9,
  "MySQL": 7,
  "PHP": 7,
}

var neighborhoodMap = {
  "JavaScript": 10,
  "HTML": 10,
  "CSS": 10,
  "jQuery": 10,
  "Knockout": 10,
  "Ajax": 9,
  "Google Maps API": 7,
  "Yelp API": 7,
}

var dashBoard = {
  "JavaScript": 10,
  "HTML": 10,
  "CSS": 10,
  "Bootstrap": 9,
  "PhotoShop": 7,
  "Dreamweaver": 7,
}

var draftKit = {
  "JS, HTML, CSS": 10,
  "React": 10,
  "Material UI": 10,
  "Bootstrap": 9,
  "jQuery": 9,
  "MySQL": 9,
}

var style = "grey-anim";
var locations = ["pitch-bars","map-bars","dash-bars","draft-bars"];

makeBars(favorites,locations[0]);
makeBars(neighborhoodMap,locations[1]);
makeBars(dashBoard,locations[2]);
makeBars(draftKit,locations[3]);