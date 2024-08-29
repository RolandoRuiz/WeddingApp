function onTouch() {
    const closeCircle = document.getElementById('hamCircle');

    closeCircle.classList.add('hamCircleFocus');

    const openCross = document.getElementById('hamCross');

    openCross.classList.add('hamCrossFocus');

}

function unTouch() {
    const closeCircle = document.getElementById('hamCircle');

    closeCircle.classList.remove('hamCircleFocus');

    const openCross = document.getElementById('hamCross');

    openCross.classList.remove('hamCrossFocus');

}

/*
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

const rtnBtn = document.getElementById('ltRB');

function returnToStart(){
  const dirCer = document.getElementById('dirCer');
  const dirPar = document.getElementById('dirPar');
  
  if (dirCer){
    console.log("Correct");
    var disappear = document.querySelectorAll(".disapear");

    for(var i=0; i<disappear.length; i++){
      (function (i) {
        setTimeout(function () {disappear[i].style.animation = "vanishGrid 0.8s forwards"},i*15)
    }(i))
    }

  }else if (dirPar) {
    console.log("Incorrect");
  }

}

rtnBtn.addEventListener('click', returnToStart);




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


