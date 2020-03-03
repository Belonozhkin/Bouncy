// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {

//     e.preventDefault()
//     const blockID = anchor.getAttribute('href').substr(1)

//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     })
//   })
// };

$("a[href^='#']").click(function (event) {
  event.preventDefault();

  let id = $(this).attr('href'),
    top = $(id).offset().top - 50 + 'px';

  $('body,html').animate({ scrollTop: top }, 1000);
});

window.onscroll = function showHeader() {
  let header = document.querySelector('.slider__container');

  if (window.pageYOffset > 150) {
    header.classList.add('header_fixed');
  } else {
    header.classList.remove('header_fixed');
  }
}

$(document).ready(function () {
  $('.slider__burger').click(function (event) {
    $('.slider__burger, .slider__menu').toggleClass('active_mobile');
    $('body').toggleClass('mobile-lock');
  });

  $('.menu_item').click(function (event) {
    $('.slider__burger, .slider__menu').removeClass('active_mobile');
    $('body').removeClass('mobile-lock');
  });

});

// let mobileOpen = document.querySelector(".slider__burger");

// mobileOpen.addEventListener("click", function () {
// ПЕРЕФОРМАТИРОВАТЬ НА НАТИВНЫЙ js
// });


let mapBtn = document.querySelector(".map__btn");

mapBtn.addEventListener("click", function shr() {
  mapBtn.classList.toggle("shrinkBtn");
});



const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach(item => {
      item.style.right = '9999px';
      item.style.position = 'absolute';
      item.style.opacity = '0';

    });

    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    content[i].style.right = '0';
    content[i].style.position = 'relative';
    content[i].style.opacity = '1';
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (e) => {
    const target = e.target;
    if (target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);

        }
      });
    }
  });
};

tabs('.details__navbar', '.detail__tab', '.details__description', 'after_click');
tabs('.services__menu', '.services__tab', '.services__text', 'after_click');



$('#print').on('click', () => {
  event.preventDefault();
  $('.card').addClass('hide');
  $('.print').removeClass('hide');
  $('#print').addClass('chosen');
  $('#Wordpress, #HTML, #Web, #Branding, #Identity, #all').removeClass('chosen');
});

$('#Identity').on('click', () => {
  event.preventDefault();
  $('.card').addClass('hide');
  $('.Identity').removeClass('hide');
  $('#Identity').addClass('chosen');
  $('#Wordpress, #HTML, #Web, #Branding, #all, #print').removeClass('chosen');
});

$('#Branding').on('click', () => {
  event.preventDefault();
  $('.card').addClass('hide');
  $('.Branding').removeClass('hide');
  $('#Branding').addClass('chosen');
  $('#Wordpress, #HTML, #Web, #all, #Identity, #print').removeClass('chosen');
});

$('#Web').on('click', () => {
  event.preventDefault();
  $('.card').addClass('hide');
  $('.web').removeClass('hide');
  $('#Web').addClass('chosen');
  $('#Wordpress, #HTML, #all, #Branding, #Identity, #print').removeClass('chosen');
});

$('#HTML').on('click', () => {
  event.preventDefault();
  $('.card').addClass('hide');
  $('.HTML').removeClass('hide');
  $('#HTML').addClass('chosen');
  $('#Wordpress, #all, #Web, #Branding, #Identity, #print').removeClass('chosen');
});

$('#Wordpress').on('click', () => {
  event.preventDefault();
  $('.card').addClass('hide');
  $('.Wordpress').removeClass('hide');
  $('#Wordpress').addClass('chosen');
  $('#all, #HTML, #Web, #Branding, #Identity, #print').removeClass('chosen');
});

$('#all').on('click', () => {
  event.preventDefault();
  $('.card').removeClass('hide');
  $('#all').addClass('chosen');
  $('#Wordpress, #HTML, #Web, #Branding, #Identity, #print').removeClass('chosen');
});  