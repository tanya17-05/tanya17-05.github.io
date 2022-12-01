var i = 0;
var txt = "wait... you don't know what web developers do? "; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector("#talk").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else setTimeout(fadeIn, 500);
}
typeWriter();

var opacity = 0;
var intervalID = 0;


function fadeIn() {
  setInterval(show, 30);
}

function show() {
  var fadeLink = document.querySelector("#talk-link");
  opacity = Number(window.getComputedStyle(fadeLink).getPropertyValue("opacity"));
  if (opacity < 1) {
    opacity = opacity + 0.2;
    fadeLink.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}



const Texts = [
  'HTML', 'CSS', 'JAVASCRIPT',
  'REACT', 'PYTHON', 'SASS',
  'NODEJS', 'MONGODB', 'EXPRESS',
  'MYSQL', 'C++', 'PHP',
  'C'
];

let mediaQuery = window.matchMedia("(max-width: 700px)");

var tagCloud = TagCloud('.sphere', Texts, {
  // Sphere radius in px
  radius: ((mediaQuery.matches) ? 150 : 200),
  // animation speed
  // slow, normal, fast
  maxSpeed: 'normal',
  initSpeed: 'fast',
  // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
  direction: 135,
  // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
  keep: true
  
});


// Giving color to each text in sphere
var color = '#715bfe ';
document.querySelector('.sphere').style.color = color;


// function validateForm (event) {
//   event.preventDefault()
//   let senderName = document.getElementById('senderName').value;
//   let senderEmail = document.getElementById('senderEmail').value;
//   let senderMessage = document.getElementById('senderMessage').value;
//   let errorMessages = document.getElementsByClassName('val-error');
//   let check=4;

//   if(senderName==='') {
//     errorMessages[0].innerHTML=`Please enter your name`;
//     errorMessages[0].classList.add('visible');
//   }
//   else {
//     errorMessages[0].innerHTML=``;
//     errorMessages[0].classList.remove('visible');
//     check--;
//   }
//   if(senderEmail==='') {
//     errorMessages[1].innerHTML=`Please enter your email id`;
//     errorMessages[1].classList.add('visible');
//   }
//   else {
//     errorMessages[1].innerHTML=``;
//     errorMessages[1].classList.remove('visible');
//     check--;
//     let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (!(re.test(senderEmail))) {
//       errorMessages[1].innerHTML=`Please valid email id`;
//       errorMessages[1].classList.add('visible');
//     }
//     else {
//       errorMessages[1].innerHTML=``;
//       errorMessages[1].classList.remove('visible');
//       check--;
//     }
//   }
//   if(senderMessage==='') {
//     errorMessages[2].innerHTML=`You want to say something?`;
//     errorMessages[2].classList.add('visible');
//   }
//   else {
//     errorMessages[2].innerHTML=``;
//     errorMessages[2].classList.remove('visible');
//     check--;
//   }
//   if(check===0) {
//     sendEmail();
//   }
// }


// function sendEmail () {
//   console.log("email");
//   let senderName = document.getElementById('senderName').value;
//   let senderMessage = document.getElementById('senderMessage').value;
//   let senderEmail = document.getElementById('senderEmail').value;
//   let messageStatus = document.getElementById('message-status');
//   let form = document.getElementById("contact-form");
//   messageStatus.innerHTML = `Wait a sec...`;

//   Email.send({
//     Host: "smtp.elasticemail.com",
//     code deleted (see in imp code folder)
//   })
//     .then(function (message) {
//       if(message=='OK') {
//         messageStatus.innerHTML = `Thanks for connecting ❤`;
//         form.reset();
//     }
//       else {
//         // console.log(message);
//         messageStatus.innerHTML =  `OOPS! There is an error out there. Sorry for inconvenience.`;
//       }
//     });
// }