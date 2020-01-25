import './styles.scss';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
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


