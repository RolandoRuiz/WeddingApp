window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

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
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "";
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
  
  for(var i=0; i<closeDirMenu.length; i++){
    (function (i) {
      setTimeout(function () {closeDirMenu[i].style.animation = "vanishGrid 0.3s forwards ease-in"},i*100);
    }(i))
    dirIntro.style.zIndex = 0;
  }
 }

 function openMenu(){

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
    }(i))
  }
 }

 openCelebration.addEventListener('click', openCer);
 openParty.addEventListener('click', openPar);
 closeDirCer.addEventListener('click', closeCer);
 closeDirPar.addEventListener('click', closePar);
 openAfterparty.addEventListener('click', openAft);
 closeDirAft.addEventListener('click', closeAft);

 /*Interserction Observer for schedule section*/

 const scheduleSection = document.querySelector("#SchedSection"); //target object
 const displayTitles = document.querySelectorAll('.getSchedTitles');
 const getTimeline = document.querySelectorAll(".getTimeline");
 const getActivities = document.querySelectorAll(".backDrop");
 const getActContent = document.querySelectorAll(".showActElem");


 const schedOptions = { //options for the observer (who is the observer, reduce its size with margin, how much do I need to activate it)
  root: null,
  rootMargin: "-35%",
  threshold: 0,
 }

 const scheduleAnimation = (entries) =>{ //callback function
    entries.forEach((entry)=>{
    if(entry.isIntersecting){

      displayTitles.forEach((title,i) => {setTimeout(() => {
        title.classList.add("showSchedTitles");
      }, i*500);});
      
      getTimeline[0].classList.toggle("startDotAnim");
      getTimeline[1].classList.toggle("startLineAnim");
      getTimeline[2].classList.toggle("endDotAnim");

      getActivities.forEach((activity, i) => {
        setTimeout(() => {
          activity.classList.toggle("showActivity");
        },520*(i+1));

        getActContent.forEach((content, i) =>{

          setTimeout(() =>{
            if (getActContent[i].classList.contains('actIcon')) {
              getActContent[i].classList.add('showContent');
            }
            else if (getActContent[i].classList.contains('aTitle')) {
              getActContent[i].classList.add('showContent');
            }
            else if (getActContent[i].classList.contains('actDivider')) {
              getActContent[i].classList.add('slideDivider');
            }
            else if (getActContent[i].classList.contains('aHour')) {
              getActContent[i].classList.add('showContent');
            }
          },160*(i+1))
        });

        const getHighlight = document.querySelectorAll('.activityBgr');

        const hightlightOptions = {
          root: null,
          rootMargin: "-48%",
          threshold: 0,
        }

        const showHightlight = (highlights) =>{
          highlights.forEach((highlight) =>{


            if (highlight.isIntersecting) {
              highlight.target.classList.toggle('highlight')
              highlight.target.classList.toggle("unfocus")
            }else{
              highlight.target.classList.remove("highlight")
              highlight.target.classList.remove("unfocus")

            }
          }
        )}

        const hightlightObserver = new IntersectionObserver(showHightlight, hightlightOptions);

        getHighlight.forEach((Highlight) => { 
          setInterval(() => {
            hightlightObserver.observe(Highlight);
          }, 6000);
        });

      });

      ScheduleObserver.unobserve(scheduleSection);
    }
  })
 }

 const ScheduleObserver = new IntersectionObserver(scheduleAnimation, schedOptions);
 ScheduleObserver.observe(scheduleSection);

  
  const leftBtn = document.querySelector(".leftPhotoBtn");
  const rightBtn = document.querySelector(".rightPhotoBtn");
  const photoList = document.querySelector(".photoList");
  const modalList = document.querySelector(".modalList")
  const galImg = document.querySelectorAll(".galleryImg");
 
  let init = 0;
  let amount = 100;

  function timer(){
    moveRight();
    pauseSlider();
  }

  var initial = setInterval(moveRight,4000);

  function pauseSlider(){
    clearTimeout(initial);
    initial = setInterval(moveRight,8000);
    setTimeout(resumeSlider, 8000);
  };

  function resumeSlider(){
    clearTimeout(initial);
    initial = setInterval(moveRight,4000);
  };

  function stopSlider(){
    clearTimeout(initial);
  }

  
  function moveRight(){
 
    if (init < (galImg.length - 1) * amount) {
      init += amount;
 
      photoList.style.transform = "translateX(-" + init + "svw";
      photoList.style.transition = "transform 0.4s ease-out";
      modalList.style.transform = "translateX(-" + init + "svw";
      modalList.style.transition = "transform 0.4s ease-out";

    }
    else{
     photoList.style.transition = "";
     photoList.style.transform = "translateX(-" + 0 + "svw";
     modalList.style.transition = "";
     modalList.style.transform = "translateX(-" + 0 + "svw";
     init = 0;
    }
  }

  rightBtn.addEventListener("click", timer);

  const showopenModal = document.querySelector(".modalGalleryframe")

  galImg.forEach((gImg)=>{
    gImg.addEventListener("click", function openModal(){
      stopSlider()
      showopenModal.classList.add("showModal")
    })
  })
9
  const closeModal = document.querySelector(".closeModalBtn");


  function hideModal(){
    showopenModal.classList.remove("showModal")
    resumeSlider()
  }

  closeModal.addEventListener("click", hideModal)



  leftBtn.addEventListener("click", function(){

    if (init > 0) {
      init -= amount;

      photoList.style.transform = "translateX(-" + init + "svw";
      photoList.style.transition = "transform 0.4s ease-out";
      modalList.style.transform = "translateX(-" + init + "svw";
      modalList.style.transition = "transform 0.4s ease-out"

    }
    else{
      photoList.style.transition = "";
      modalList.style.transition = "";
      init =  2900;
      photoList.style.transform = "translateX(-" + init + "svw";
      modalList.style.transform = "translateX(-" + init + "svw";
    }

  })

  const playBtn = document.querySelector('#playBtn');
  const pauseBtn = document.querySelector('#pauseBtn');
  const audio = document.querySelector("#audio");
  const audioTimeline = document.querySelector('.audioTimeline');
  const audioProgress = document.querySelector('.timelineProgress');


  function playSong(){
    playBtn.style.zIndex = "-1";
    playBtn.style.opacity = "0";
    pauseBtn.style.zIndex = "1";
    pauseBtn.style.opacity = "1";
    audio.play();
  }

  function pauseSong(){
    pauseBtn.style.zIndex = "-1";
    pauseBtn.style.opacity = "0";
    playBtn.style.zIndex = "1";
    playBtn.style.opacity = "1";
    audio.pause();
  }

  function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    console.log(progressPercent);
    audioProgress.style.width = progressPercent + '%';
  }

  function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;

  }

playBtn.addEventListener("click", playSong);
pauseBtn.addEventListener("click", pauseSong);
audio.addEventListener('timeupdate', updateProgress)
audioTimeline.addEventListener('click', setProgress)

const startInvitation = document.querySelector(".startInvitation");
const closeMsg = document.querySelector(".contentBox-InitialMsg");
const closeBranches = document.querySelector(".initialBranches");
const showHomeBranches = document.querySelectorAll(".showBranch");
const closeInitialBox = document.querySelector(".initialMsg");
const flow = document.body;
const closefixGal = document.querySelector(".galleryFixed");
const appearDate = document.querySelectorAll(".date");
const appearEmblem = document.querySelector(".emblem");
const appearTime = document.querySelectorAll(".timeUnit");
const appearDArrow = document.querySelector(".downArrow");



function closeStart(){
  audio.play();
  playBtn.style.zIndex = "-1";
  playBtn.style.opacity = "0";
  pauseBtn.style.zIndex = "1";
  pauseBtn.style.opacity = "1";

  closeMsg.classList.add("closeMsg");
  closeBranches.classList.add("closeBranches");
  closeInitialBox.classList.add("closeInitialBox");
  closefixGal.classList.add("reducefixedGallery");

  setTimeout(() => {
    flow.classList.add("beVisible");
  }, 8000);

  appearDate.forEach((date,i) => {
    setTimeout(() => {
        date.classList.add("dateAppear");
    }, 300*(i+1));
  });

  appearTime.forEach((time,i) => {
    setTimeout(() => {
        time.classList.add("appearTime");
    }, 300*(i+1));
  });

  appearEmblem.classList.add("showEmblem");
  appearDArrow.classList.add("showDownArrow")

  showHomeBranches.forEach((homebranch) => {
    homebranch.classList.add("showHomeBranches");
  });


}

startInvitation.addEventListener("click", closeStart);


const invitationTextBox = document.querySelector(".invitationTextBox");
const getInvText = document.querySelectorAll(".getInvText");
const showiniTxtBranches = document.querySelectorAll(".iniTxtBranch");
const showiniTxtBranches2 = document.querySelector(".iniTxtBranch2");
const getMusicPlayer = document.querySelector('.OurSongBox');
const musicElements = document.querySelectorAll(".musicElement");

const genOptions = {
  root: null,
  rootMargin: "-25%",
  threshold: 0,
}

function showinvTxt(entries){
  entries.forEach((entry =>{
    if (entry.isIntersecting) {

      getInvText.forEach((invText, i) => {setTimeout(() => {
        invText.classList.add("appearInv");
      }, 500*(i+1));});

      showiniTxtBranches.forEach((iniTxtBranch, i) => {setTimeout(() => {
        iniTxtBranch.classList.add("showBranches");
      }, 700*(i+1));});

      setTimeout(() => {
        showiniTxtBranches2.classList.add("slideBranches");
      }, 1300);
    }
  }))}

  function showMusicPlayer(entries){
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        musicElements.forEach((musicElem, i) =>{
          setTimeout(() => {
            musicElem.classList.add("showMusicPlayer");
          }, 300*(i+1));
        });
      }
    })
  }


const observeInvitationText = new IntersectionObserver( showinvTxt, genOptions);
observeInvitationText.observe(invitationTextBox);

const observeMusicPlayer = new IntersectionObserver(showMusicPlayer, genOptions);
observeMusicPlayer.observe(getMusicPlayer);

const galOptions = {
  root: null,
  rootMargin: "-30%",
  threshold: 0,
}


const galleryElements = document.querySelectorAll(".galleryElements");

function showGalleryInfo(entries){
  entries.forEach(entry =>{
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("showGalElem");
        }, 500);
      }
  })

}

const observeMainGallery = new IntersectionObserver(showGalleryInfo, galOptions);

galleryElements.forEach(galElement =>{
  observeMainGallery.observe(galElement);
})

/* show gallery branches*/

const getGalObs = document.querySelectorAll(".branchObs");
const getmGal = document.querySelectorAll(".mgalBranch");

function showGalleryBranches(entries){
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("bObsTop")) {
        getmGal[0].classList.add("showGalBranch")
      }

      if (entry.target.classList.contains("bObsBtm")) {
        getmGal[1].classList.add("showGalBranch")
      }
    }
  });
  
}

const observeGalBranches = new IntersectionObserver(showGalleryBranches, galOptions);

getGalObs.forEach(galObs => {
  observeGalBranches.observe(galObs);
});


const getTimeLineBranches = document.querySelectorAll(".schedBranch");

function showTimelineBranches(entries){
  entries.forEach((entry,i) =>{
    setTimeout(() => {
      entry.target.classList.add("showGalBranch")
    }, 500*(i+1));
  })
}

const observeTimBranches = new IntersectionObserver(showTimelineBranches, galOptions);


getTimeLineBranches.forEach(timeBranch => {
  observeTimBranches.observe(timeBranch);
});


const directionImg = document.querySelector(".directionImg");
const showDirText = document.querySelector(".directionIntro");


function showDirTitle(entries){
  entries.forEach(entry =>{
    if (entry.isIntersecting) {
        setTimeout(() => {
          showDirText.classList.add("appearDirText");
        }, 500);
      }
    
    })
}

const observeDirectionTitle = new IntersectionObserver(showDirTitle, galOptions);
observeDirectionTitle.observe(directionImg);



