// Set the date we're counting down to
var countDownDate = new Date("Oct 12, 2024 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("dateCounter").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


const openCelebration = document.getElementById('openCer');
const openParty = document.getElementById('openPar');
const closeDirMenu = document.querySelectorAll('.closeMenu');
const dirIntro = document.getElementById('dirIntro');
const dirCer = document.getElementById('dirCer');
const dirPar = document.getElementById('dirPar');
const openCerCard = document.getElementsByClassName('cerCard');
const openParCard = document.getElementsByClassName('parCard');
const backgroundImg = document.getElementById('ImgCer');
const backgroundImg2 = document.getElementById('ImgPar');
const coupleImg = document.getElementById('DirCou');
const closeDirCer = document.getElementById('closeCer');
const closeDirPar = document.getElementById('closePar');



 function closeMenu(){
  console.log('Cerrando Menu');
  
  for(var i=0; i<closeDirMenu.length; i++){
    (function (i) {
      setTimeout(function () {closeDirMenu[i].style.animation = "vanishGrid 0.3s forwards ease-in"},i*100);
    }(i))
    dirIntro.style.zIndex = 0;
  }
 }

 function openMenu(){
  console.log('Abriendo Menu');

  for(var i=0; i<closeDirMenu.length; i++){
    (function (i) {
      setTimeout(function ()
      {closeDirMenu[i].style.animation = "appearGrid 0.3s 1s backwards ease-in";
      },i*100);
    }(i))
    dirIntro.style.zIndex = 1;
  }
 }

 function openCer(){
  closeMenu();

  backgroundImg.style.scale = 1;
  backgroundImg.style.filter = "blur(0px)";
  backgroundImg.style.transform = "translateY(0px)";

  coupleImg.style.opacity = 0;
  coupleImg.style.scale = 0.90;
  coupleImg.style.filter = "blur(10px)";
  coupleImg.style.transitionDelay = "0s";

  dirCer.style.zIndex = 5;

  for(var i=0; i<openCerCard.length; i++){
    (function (i) {
      setTimeout(function () {openCerCard[i].style.animation = "appearCard 0.8s 0.2s forwards cubic-bezier(.57,.23,.52,2.22)"},i*100);
    }(i))
  }
 }

 function closeCer(){
  openMenu();

  backgroundImg.style.scale = 2.8;
  backgroundImg.style.filter = "blur(2px)";
  backgroundImg.style.transform = "translateY(-150px)";

  coupleImg.style.opacity = 1;
  coupleImg.style.scale = 1;
  coupleImg.style.filter = "blur(0px)";
  coupleImg.style.transitionDelay = "0.5s";

  dirCer.style.zIndex = 0;

  for(var i=0; i<openCerCard.length; i++){
    (function (i) {
      setTimeout(function()
      {openCerCard[i].style.animation = "VanishCard 0.8s 0.2s backwards cubic-bezier(.57,.23,.52,2.22)";
      },i*100);
      console.log('does repeat?');
    }(i))
  }
 }

 function openPar(){
  closeMenu();

  coupleImg.style.opacity = 0;
  coupleImg.style.scale = 0.90;
  coupleImg.style.filter = "blur(10px)";
  coupleImg.style.transitionDelay = "0s";

  dirPar.style.zIndex = 5;

  backgroundImg2.style.animation = "moveLeft 0.8s forwards cubic-bezier(.73,.85,.7,1.03)";
  backgroundImg2.style.scale = "1.2";
  backgroundImg2.style.opacity = "1";
  backgroundImg2.style.filter = "blur(0px)";

  for(var i=0; i<openParCard.length; i++){
    (function (i) {
      setTimeout(function () {openParCard[i].style.animation = "appearCard 0.8s 0.2s forwards cubic-bezier(.57,.23,.52,2.22)"},i*100);
    }(i))
  }
 }

 function closePar(){
  openMenu();

  coupleImg.style.opacity = 1;
  coupleImg.style.scale = 1;
  coupleImg.style.filter = "blur(0px)";
  coupleImg.style.transitionDelay = "0.5s";

  dirPar.style.zIndex = 0;

  backgroundImg2.style.animation = "moveRight 0.6s 0.6s backwards cubic-bezier(.73,.85,.7,1.03)";
  backgroundImg2.style.scale = "1";
  backgroundImg2.style.opacity = "0";
  backgroundImg2.style.filter = "blur(10px)";

  for(var i=0; i<openParCard.length; i++){
    (function (i) {
      setTimeout(function()
      {openParCard[i].style.animation = "VanishCard 0.2s 0.2s backwards cubic-bezier(.57,.23,.52,1.8)";
      },i*100);
      console.log('does repeat?');
    }(i))
  }
 }

 openCelebration.addEventListener('click', openCer);
 openParty.addEventListener('click', openPar);
 closeDirCer.addEventListener('click', closeCer);
 closeDirPar.addEventListener('click', closePar);

/*
const openCard = document.getElementsByClassName('openBtn');
var i = 0;

function openInfoCard(){

  if(openCard.classList.contains = 'openCer'){
    console.log("i=1");
  }else if(openCard.classList.contains = 'openPar'){
    console.log("i=2");
  }
}

for (i; i < openCard.length; i++) {
  openCard[i].addEventListener('click', openInfoCard, false);
}


function seeCer(){

  const backgroundImg = document.getElementById('ImgBox');
  const coupleImg = document.getElementById('DirCou');
  const LT1 = document.getElementById('LT1');
  const LT2 = document.getElementById('LT2');
  const LT3 = document.getElementById('LT3');
  const BB1 = document.getElementById('BB1');
  const DI = document.getElementById('DI');

  backgroundImg.style.scale = 1;
  backgroundImg.style.filter = "blur(0px)"

  coupleImg.style.opacity = 0;
  coupleImg.style.scale = 0.96;

  LT1.style.animation = "vanish 0.8s 0.1s forwards";
  LT1.style.animation = "vanish 0.8s 0.1s forwards";
  LT2.style.animation = "vanish 0.8s 0.2s forwards";
  LT3.style.animation = "vanish 0.8s 0.4s forwards";
  BB1.style.animation = "vanishGrid 0.8s 0.4s forwards";
  DI.style.zIndex = 0;

  const directionCer = document.getElementById('dirCer');

  directionCer.classList.toggle("appear");

  const ltI1 = document.getElementById('ltI1');
  const ltC1 = document.getElementById('ltC1');
  const ltC2 = document.getElementById('ltC2');
  const ltH = document.getElementById('ltH');
  const ltI2 = document.getElementById('ltI2');
  const ltC3 = document.getElementById('ltC3');
  const ltDB = document.getElementById('ltDB');
  const ltRB = document.getElementById('ltRB');

  ltI1.style.animation = "appear 0.5s 2s forwards";
}
*/

/*const closeBtn = document.getElementById('closeBtn');
const dirCer = document.getElementById('dirCer');
const dirPar = document.getElementById('dirPar');

function returnToStart(){
  
  if (dirCer){
    console.log("Correct");
    var closeDirCer = document.querySelectorAll(".closeDir");

    for(var i=0; i<closeDirCer.length; i++){
      (function (i) {
        setTimeout(function () {closeDirCer[i].style.animation = "vanishGrid 0.8s forwards"},i*15)
    }(i))
    }

  }else if (dirPar) {
    console.log("Incorrect");
  }

}

closeBtn.addEventListener('click', returnToStart);
*/
/*
const dirCer = document.getElementById('dirCer');
const dirPar = document.getElementById('dirPar');

const closeCer = document.getElementById('closeDirCer');

function closeCerInfo(){
  
  if (dirCer) {
    console.log("Correct");
    var closingCer = document.querySelectorAll(".closeCer");
  
    for(var i=0; i<closingCer.length; i++){
      (function (i) {
        setTimeout(function () {closingCer[i].style.animation = "vanishGrid 0.8s forwards"},i*15)
      }(i))
    }
  
  }
}

closeCer.addEventListener('click', closeCerInfo);


const closePar = document.getElementById('closeDirPar');

function closeParInfo(){

  if (dirPar) {
    console.log("Correct 2");
    var closingPar = document.querySelectorAll(".closePar");

    for(var i=0; i<closingPar.length; i++){
      (function (i) {
        setTimeout(function () {closingPar[i].style.animation = "vanishGrid 0.8s forwards"},i*15)
      }(i))
    }
  }

}

closePar.addEventListener('click', closeParInfo);
*/


