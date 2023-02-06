'use strict';

///////////////////////////////////////
// Modal window

const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const btnUp = document.querySelector('.btn_up');
const time = document.querySelector('.time');

// %%%%%%%%%%%%%%%%%%%%%%%%% | Open Modal | %%%%%%%%%%%%%%%%%%%%%%%%%

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => 
  btn.addEventListener('click', openModal))

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// %%%%%%%%%%%%%%%%%%%%%%%%% | Button up | %%%%%%%%%%%%%%%%%%%%%%%%%

 btnUp.addEventListener('click',function (e) {
  header.scrollIntoView({behavior : 'smooth'})
});

// %%%%%%%%%%%%%%%%%%%%%%%%% | Button scrolling | %%%%%%%%%%%%%%%%%%%%%%%%%

btnScrollTo.addEventListener('click',function (e) {
    section1.scrollIntoView({behavior : 'smooth'})
});

// %%%%%%%%%%%%%%%%%%%%%%%%% | Page Navigation | %%%%%%%%%%%%%%%%%%%%%%%%%

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   // console.log(el);
//   el.addEventListener('click',function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({behavior : 'smooth'})
//   })
// });

// -------------------------------||--------------------------------------

// 1. Add even listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click',function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');                                   // section--1,2,3
    document.querySelector(id).scrollIntoView({behavior : 'smooth'})
  }
});

// %%%%%%%%%%%%%%%%%%%%%%%%% | Tabbed Content | %%%%%%%%%%%%%%%%%%%%%%%%%

// tabs.forEach(t => t.addEventListener('click',() => console.log('TAP')))

// Event Delegation
tabsContainer.addEventListener('click',function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // ----------|Guard Clause|-------------
  // | OLD WAY |

  // if (clicked) {
  //   clicked.classList.add('operations__tab--active');
  // }

  // | MODERN WAY |
  if (!clicked) return; 

  // Remove active Classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))
  
  // Active tab
  clicked.classList.add('operations__tab--active');
  // console.log(clicked.dataset.tab); 1,2,3

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');    
});

// %%%%%%%%%%%%%%%%%%%%%%%%% | Menu fade animation | %%%%%%%%%%%%%%%%%%%%%%%%%

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  };
};

nav.addEventListener('mouseover',handleHover.bind(0.5));    // function(e,0.5)
nav.addEventListener('mouseout',handleHover.bind(1));       // function(e,1)









// %%%%%%%%%%%%%%%%%%%%%%%%% | time| %%%%%%%%%%%%%%%%%%%%%%%%%

setInterval(function () {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2 , '0');
  const min = String(now.getMinutes()).padStart(2 , '0');
  const sec = String(now.getSeconds()).padStart(2 , '0');

  if (hour > 12) {
    time.textContent = `${String(hour - 12).padStart(2 , '0')} : ${min} : ${sec}`;
  } else{
    time.textContent = `${hour} : ${min} : ${sec}`;
  }  
},1000);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
/*
// console.log(document)                // whole document
// console.log(document.documentElement)   // html element
// console.log(document.head)
// console.log(document.body)

const header = document.querySelector('.header');

// cookiee pop-up

const cookie = document.createElement('div')
cookie.classList.add('cookie-message')
cookie.innerHTML = 
  'accept cookie get full access. <button class = "btn close-cookie"> accept it </button>';

// header.prepend(cookie)
header.append(cookie);
// header.after(cookie)
// header.before(cookie)
// header.append(cookie.cloneNode(cookie));

document
    .querySelector('.cookie-message')
    .addEventListener('click',function () {
      cookie.remove('cookie-message')
      // cookie.parentElement.removeChild(cookie)
    })

// styles

cookie.style.backgroundColor = '#37383d';
cookie.style.color = '#fff'
cookie.style.width = '120%'
cookie.style.height = 
  Number.parseFloat(getComputedStyle(cookie).height,10)+30+'px'

document.documentElement.style
  .setProperty('--color-primary','red');

// attribute

const logo = document.querySelector('.nav__logo');

// standard
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.id)
// Non-standard
console.log(logo.designer)
console.log(logo.getAttribute('designer'));
console.log(logo.getAttribute('src'));

// smooting Scroll old modal
// const btnScrollTo = 
//   document.querySelector('.btn--scroll-to')
// const section1 = 
//   document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  console.log('X/Y',window.pageXOffset,pageYOffset);
  console.log('H/W',document.documentElement.clientHeight,document.documentElement.clientWidth);

  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, 
  //   s1coords.top + window.pageYOffset
  //   );

  // window.scrollTo({
  //   left :s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior : 'smooth',
  // });

  // other way
  section1.scrollIntoView({behavior : 'smooth'})

})

// Events
const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter',function (e) {
//   alert('hi, you are reach the headline')
// })

const alertH1 = function (e) {
  alert('hi, you are reach the headline');

  h1.removeEventListener('mouseenter',alertH1);
}

h1.addEventListener('mouseenter',alertH1)

// h1.onmouseenter = function (e) {
//   alert('hi, you are reach the headline')
// }

const ramdomInt = (min,max) => Math.floor(Math.random() * (max-min) + min);

const randomColor = function () {
  return `rgb(${ramdomInt(0,255)},${ramdomInt(0,255)},${ramdomInt(0,255)})`
}
console.log(randomColor());
document.querySelector('.nav__link').addEventListener('click',function (e) {
    this.style.backgroundColor = randomColor();
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.currentTarget === this)

    // stopPropagation
    // e.stopPropagation()
})

document.querySelector('.nav__links').addEventListener('click',function (e) {
    this.style.backgroundColor = randomColor();
    console.log(e.target);
    console.log(e.currentTarget);
})

document.querySelector('.nav').addEventListener('click',function (e) {
  this.style.backgroundColor = randomColor();
    console.log(e.target);
    console.log(e.currentTarget);
},true)

// DOM traversing
const h1 = document.querySelector('h1');

// going DOWNwards : CHILD
console.log(document.querySelectorAll('.highlight'))    // html - la
console.log(h1.querySelectorAll('.highlight'))          // h1 -la 
console.log(h1.childNodes) ;
console.log(h1.children) ;
console.log(h1.firstElementChild) ;
  
const h1 = document.querySelector('h1');
// going UPwards : PARENTS
console.log(h1.parentNode);
console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-primary)'
console.log(h1.closest('.header'))
h1.closest('h1').style.color = 'red'

const h1 = document.querySelector('h1');

// Going sidewards - Siblings
console.log(h1.previousElementSibling);   // null
console.log(h1.nextElementSibling);       // h4

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform  = 'scale(0.5)';
});

Sticky navigation
const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

window.addEventListener('scroll',function () {
  // console.log(window.scrollY);
  
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
    btnUp.classList.remove('hide');
  } 
  else {
    nav.classList.remove('sticky');
    btnUp.classList.add('hide');
  };
})

///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
*/








