import './styles.scss';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import $ from 'jquery';
import 'bootstrap';

import 'slick-carousel';

$('#carousel').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: true,
  prevArrow: $('#prev'),
  nextArrow: $('#next'),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    },
  ]
});

$('#likeUs').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: true,
  prevArrow: $('#prev-like'),
  nextArrow: $('#next-like'),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    },
  ]
});

$('#viewed-carousel').slick({
  centerMode: false,
  centerPadding: '0',
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: true,
  nextArrow: $('#viewed_next'),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 993,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    },
  ]
});

$(document).ready(function(){
  $(".scrollLink[href^='#']").click(function(e) {
    e.preventDefault();
    const aid = $(this).attr("href");
    const a = $(aid).offset();
    $('html, body').animate({scrollTop: a.top}, 'slow');
  });

  $(".scrollTabs").click(function(e) {
    e.preventDefault();
    const a = $('#nav-tabContent').offset();
    $('html, body').animate({scrollTop: a.top - 150}, 'slow');
  });

  $(".scrollTabsTop").click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 'slow');
  });
});


const imageRectangle = (imageContainer) => {
  const sliderImage = imageContainer.find('img');

  if(sliderImage.width() > 0 ) {
    sliderImage.height(sliderImage.width())
  }
};

const productCarousel = $('#productCarousel');
const detailCarousel = $('.details-gallery');

imageRectangle(productCarousel);
imageRectangle(detailCarousel);


$(document).ready(function() {
  $(window).on('resize', function() {
    imageRectangle(productCarousel);
    imageRectangle(detailCarousel)
  });
})


AOS.init();


