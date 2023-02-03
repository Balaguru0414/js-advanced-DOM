'use strict';

///////////////////////////////////////
// Modal window

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

  btnUp.addEventListener('click',function (e) {
  nav.scrollIntoView({behavior : 'smooth'})
});

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

// %%%%%%%%%%%%%%%%%%%%%%%%% | Button scrolling | %%%%%%%%%%%%%%%%%%%%%%%%%



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
*/

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




































