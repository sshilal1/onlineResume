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
}

var styles = ["grey-anim"]
    
for (var sport in favorites) {
  
  for (var style of styles) {
    
    var bars = favorites[sport]/2.5; 
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

    barStr += '</div><div class="sport-title">' + sport + '</div></div>';

    $("#"+style).append(barStr);
  }
}