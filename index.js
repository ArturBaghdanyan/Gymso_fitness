function showSideBar() {
  const nav = document.getElementById("header-nav");
  nav.style.display = 'flex';
}

function hideSidebar() {
  const nav = document.getElementById("header-nav");
  nav.style.display = 'none';
}

let sections = document.querySelectorAll('.columns');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if(top >= offset && top <= offset + height) {
      sec.classList.add('show-animate')
    }
    else {
      sec.classList.remove('show-animate')
    }
  })
};

