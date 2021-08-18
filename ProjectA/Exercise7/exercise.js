window.addEventListener("load", myInit, true); function myInit(){ 
  dayOfWeek();
  Funct1();
  Funct2();
  nav();
}
function dayOfWeek() {
  var day;
  switch (new Date().getDay()) {
    case 0:
      day = "That brain of mine is something more than merely mortal; as time will show.";
      break;
    case 1:
      day = "Religion to me is science and science is religion.";
      break;
    case 2:
      day = "The more I study, the more insatiable do I feel my genius for it to be.";
      break;
    case 3:
      day = "If you can’t give me poetry, can’t you give me poetical science?";
      break;
    case 4:
      day = "Your best and wisest refuge from all troubles is in your science.";
      break;
    case 5:
      day = "As soon as I have got flying to perfection, I have got a scheme about a steam engine.";
      break;
    case  6:
      day = "Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand.";
  }


  document.getElementById("quote").innerHTML = "Ada's quote of the day is: "
    +"<br>" + day;
}

function Funct1() {
  document.getElementById("quote").style.backgroundImage = "url('background.jpg')";
}

function Funct2() {
    document.querySelector("body").style.backgroundColor = "#FCF1A5";
    document.querySelector(".links").style.backgroundColor = "#FCF1A5";
    document.querySelector("main").style.backgroundColor = "#FCF1A5";
    document.querySelector("footer").style.backgroundColor = "#FCF1A5";
    document.querySelector("aside").style.backgroundColor = "#FCF1A5";

}


function nav(){
  window.onscroll = function() {myFunction()};

  var nav = document.getElementById("myNav");
  var sticky = nav.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  }
}

function Funct4() {
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true){
    document.querySelector("body").style.backgroundColor = "#1B4A4E";
    document.querySelector(".links").style.backgroundColor = "#1B4A4E";
    document.querySelector("main").style.backgroundColor = "#1B4A4E";
    document.querySelector("footer").style.backgroundColor = "#1B4A4E";
    document.querySelector("aside").style.backgroundColor = "#1B4A4E";
    document.body.style.color ="white";
  } else {
    document.querySelector("body").style.backgroundColor = "#FCF1A5";
    document.querySelector(".links").style.backgroundColor = "#FCF1A5";
    document.querySelector("main").style.backgroundColor = "#FCF1A5";
    document.querySelector("footer").style.backgroundColor = "#FCF1A5";
    document.querySelector("aside").style.backgroundColor = "#FCF1A5";
    document.body.style.color ="black";
  }
}