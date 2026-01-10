var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

// arrays e loops
for (var item = 0; item <= videoGames.length; item++) {
  console.log(videoGames[item]);
}

// break
for (var item = 0; item <= videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}

// forEach
videoGames.forEach(function (item) {
  console.log(item);
});

// outro exemplo de forEach
var frutas = ["Mamão", "Banana", "Uva"];

frutas.forEach(function (fruta, index, array) {
  console.log(fruta, index, array);
});
