function dwarfRollCall(dwarves){
  var length = dwarves.length;
  var dwarvesList = [];
  for(var i = 0; i < length; i++){
    dwarvesList.push((i + 1) + ". " + dwarves[i] + " ");
  }
return dwarvesList.join("");
}

function summonCaptainPlanet(planeteerCalls){
  var length = planeteerCalls.length;
  var loudPlaneteer = [];
  for(var i = 0; i < length; i++){
    loudPlaneteer.push(planeteerCalls[i].toUpperCase() + "!!!");
  }
return loudPlaneteer;
}

function longPlaneteerCalls(words){
  var length = words.length;
  for(var i = 0; i < length; i++){
    if(words[i].length > 4){
      return true;
    }
  }
return false;
}

function findTheCheese(foods){
  var length = foods.length;
  for(var i = 0; i < length; i++){
    if(foods[i] === "cheddar"){
     return "cheddar";
    }
    if(foods[i] === "gouda"){
     return "gouda";
    }
    if(foods[i] === "camembert"){
     return "camembert";
    }
  }
return "no cheese!";
}
