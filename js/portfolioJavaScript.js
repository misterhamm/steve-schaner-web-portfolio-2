/**********************************
VARIABLES
**********************************/

const openSideMenu = (event) => {
  document.getElementById('side-menu').style.width = '250px'
  event.preventDefault()
};
const closeSideMenu = (event) => {
  document.getElementById('side-menu').style.width = '0'
  event.preventDefault()
};

const superman = () => {
  document.getElementById('steve-heading').innerHTML = "Super Hero";
  document.getElementById('profile-pic-lg-2').setAttribute("src", "img/superman.jpg");
};
const steve = () => {
  document.getElementById('steve-heading').innerHTML = "Web Developer";
  document.getElementById('profile-pic-lg-2').setAttribute("src", "img/profile-picture-square.jpg")
};

const progressbar = document.getElementsByClassName('progress-bar');



/**********************************
SIDE MENU
**********************************/

document.getElementById('three-bars').addEventListener('click', openSideMenu);
document.getElementById('btn-close').addEventListener('click', closeSideMenu);



/**********************************
SECTON - ABOUT
**********************************/

document.getElementById('profile-pic-lg-2').addEventListener('mouseover', superman);
document.getElementById('profile-pic-lg-2').addEventListener('mouseout', steve);
// NOTE: This is fun to do with js but you can acheive the same thing with pure CSS without the performance hit.  Try it out!



/**********************************
PROGESS BARS
**********************************/

// NOTE: If you're repeating yourself this much there is probably a better way to do it.  Look up DRY programming.  
// In this case you're just changing the index and the width basically  try something like this. (hint, this can be greatly improved as well :) )

/*
const skillsbar = document.getElementById('skillsBars');

showSkills = function(index, percentage) {
  skillsbar.addEventListener('mouseover', () => {
    progressbar[index].style.width = percentage + "%";
    progressbar[index].innerHTML = percentage + "%";
  });
}

showSkills(0, 80);
showSkills(1, 75);
showSkills(2, 60);
showSkills(3, 90);
showSkills(4, 90);
showSkills(5, 90);
*/

for (i = 0; i < progressbar.length; i += 1) {
  skillsBars.addEventListener('mouseover', () => {
    progressbar[i].style.width = "80%";
    progressbar[i].innerHTML = "80%";
    progressbar[1].style.width = "75%";
    progressbar[1].innerHTML = "75%";
    progressbar[2].style.width = "60%";
    progressbar[2].innerHTML = "60%";
    progressbar[3].style.width = "90%";
    progressbar[3].innerHTML = "90%";
    progressbar[4].style.width = "90%";
    progressbar[4].innerHTML = "90%";
    progressbar[5].style.width = "90%";
    progressbar[5].innerHTML = "90%";
  })
}

for (i = 0; i < progressbar.length; i += 1) {
  skillsBars.addEventListener('mouseout', () => {
    progressbar[0].style.width = "0%";
    progressbar[0].innerHTML = "";
    progressbar[1].style.width = "0%";
    progressbar[1].innerHTML = "";
    progressbar[2].style.width = "0%";
    progressbar[2].innerHTML = "";
    progressbar[3].style.width = "0%";
    progressbar[3].innerHTML = "";
    progressbar[4].style.width = "0%";
    progressbar[4].innerHTML = "";
    progressbar[5].style.width = "0%";
    progressbar[5].innerHTML = "";
  })
}
