// Programa que diz se o motorista está dirigindo rápido, ok ou devagar de acordo com a velocidade do motorista. 

let driverSpeed = 110; 

if (driverSpeed > 110) {
  console.log('Driving too fast');
} else if (driverSpeed > 40 && driverSpeed <= 110) {
  console.log('ok');
} else {
  console.log('Driving too slow');
}