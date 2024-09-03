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
const openAfterparty = document.getElementById('openAft');
const closeDirMenu = document.querySelectorAll('.closeMenu');
const dirIntro = document.getElementById('dirIntro');
const dirCer = document.getElementById('dirCer');
const dirPar = document.getElementById('dirPar');
const dirAft = document.getElementById('dirAft');
const openCerCard = document.getElementsByClassName('cerCard');
const openParCard = document.getElementsByClassName('parCard');
const openAftCard = document.getElementsByClassName('aftCard');
const backgroundImg = document.getElementById('ImgCer');
const backgroundImg2 = document.getElementById('ImgPar');
const backgroundImg3 = document.getElementById('ImgAft');
const coupleImg = document.getElementById('DirCou');
const closeDirCer = document.getElementById('closeCer');
const closeDirPar = document.getElementById('closePar');
const closeDirAft = document.getElementById('closeAft');


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

 function openAft(){
  closeMenu();

  coupleImg.style.opacity = 0;
  coupleImg.style.scale = 0.90;
  coupleImg.style.filter = "blur(10px)";
  coupleImg.style.transitionDelay = "0s";

  dirAft.style.zIndex = 5;

  backgroundImg3.style.animation = "moveLeft 0.8s forwards cubic-bezier(.73,.85,.7,1.03)";
  backgroundImg3.style.scale = "1.2";
  backgroundImg3.style.opacity = "1";
  backgroundImg3.style.filter = "blur(0px)";

  for(var i=0; i<openAftCard.length; i++){
    (function (i) {
      setTimeout(function () {openAftCard[i].style.animation = "appearCard 0.8s 0.2s forwards cubic-bezier(.57,.23,.52,2.22)"},i*100);
    }(i))
  }
 }

 function closeAft(){
  openMenu();

  coupleImg.style.opacity = 1;
  coupleImg.style.scale = 1;
  coupleImg.style.filter = "blur(0px)";
  coupleImg.style.transitionDelay = "0.5s";

  dirAft.style.zIndex = 0;

  backgroundImg3.style.animation = "moveRight 0.6s 0.6s backwards cubic-bezier(.73,.85,.7,1.03)";
  backgroundImg3.style.scale = "1";
  backgroundImg3.style.opacity = "0";
  backgroundImg3.style.filter = "blur(10px)";

  for(var i=0; i<openAftCard.length; i++){
    (function (i) {
      setTimeout(function()
      {openAftCard[i].style.animation = "VanishCard 0.2s 0.2s backwards cubic-bezier(.57,.23,.52,1.8)";
      },i*100);
      console.log('does repeat?');
    }(i))
  }
 }

 openCelebration.addEventListener('click', openCer);
 openParty.addEventListener('click', openPar);
 closeDirCer.addEventListener('click', closeCer);
 closeDirPar.addEventListener('click', closePar);
 openAfterparty.addEventListener('click', openAft);
 closeDirAft.addEventListener('click', closeAft);