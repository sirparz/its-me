/**
  Pixelated theme
  Contain brief about, projects, skills, contact
  Featured Projects: Al Waha, Armor Trim, Colors
  Skills: HTML, CSS, Git, Github, Javascript, Node, More...
  Reach out on: Github, Discord
*/

function comingSoon() {
  alert('Repository coming soon.');
}

const projectCards = document.getElementsByClassName("project");
for (let i=0; i<projectCards.length; i++) {
  projectCards[i].style.cursor = "pointer";
}


function gitHubLink(gitHubLink = '') {
  if (gitHubLink === '') {
    comingSoon();
  }
  else {
    location.href = gitHubLink;
  }
}

const colorRNG = () => {
  const colors = ['#95C7DB','#DBCCAB','#E2A5D0'];
  let order = colors[Math.floor(Math.random() * colors.length)];
  return order; // your colour change
};


for (let i=0; i<projectCards.length; i++) {
  projectCards[i].addEventListener("mouseover", event => {
    event.target.style.backgroundColor = colorRNG();
  },
  true)

  projectCards[i].addEventListener("mouseout", event => {
    event.target.style.backgroundColor = 'rgb(241, 241, 241)';
    
  },
  true)
  
  //onmouseover = projectCards[i].classList.add(colorRNG());
}
// = this.onmouseover = colorRNG;
console.log(projectCards)