$(document).ready(function () {
    
    // Kontakt //
    
    $('#kontakt').click(function(){
        $('.kontakt').stop(true).fadeIn('100');
	});
    
    $('#kontakt-closer').click(function(){
        $('.kontakt').stop(true).fadeOut('100');
	});

    
    var isPaused1 = false;var isPaused2 = false;var isPaused3 = false;var isPaused4 = false;var isPaused5 = false;
var time1 = 0;var time2 = 0;var time3 = 0;var time4 = 0;var time5 = 0;

var t1 = window.setInterval(function() {
  if(!isPaused1) {time1++;$('#fade1 > .slide:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#fade1');}
}, 2500);
var t2 = window.setInterval(function() {
  if(!isPaused2) {time2++;$('#fade2 > .slide:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#fade2');}
}, 2500);
var t3 = window.setInterval(function() {
  if(!isPaused3) {time3++;$('#fade3 > .slide:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#fade3');}
}, 2500);
var t4 = window.setInterval(function() {
  if(!isPaused4) {time4++;$('#fade4 > .slide:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#fade4');}
}, 2500);
var t5 = window.setInterval(function() {
  if(!isPaused5) {time5++;$('#fade5 > .slide:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#fade5');}
}, 2500);


$('.pause1').click(function() {
  isPaused1 = true;
  $(this).parent('.fadenavinside').parent('.fadenav').find('.playholder').fadeIn();
  $(this).parent('.fadenavinside').parent('.fadenav').find('.pauseholder').hide();
});
$('.play1').click(function() {
  isPaused1 = false;
  $(this).parent('.fadenavinside').parent('.fadenav').find('.playholder').hide();
  $(this).parent('.fadenavinside').parent('.fadenav').find('.pauseholder').fadeIn();
});


$('.pause2').click(function() {
  isPaused2 = true;
  $(this).parent('.fadenavinside').parent('.fadenav').find('.playholder').fadeIn();
  $(this).parent('.fadenavinside').parent('.fadenav').find('.pauseholder').hide();
});
$('.play2').click(function() {
  isPaused2 = false;
  $(this).parent('.fadenavinside').parent('.fadenav').find('.playholder').hide();
  $(this).parent('.fadenavinside').parent('.fadenav').find('.pauseholder').fadeIn();
});


$('.pause3').click(function() {
  isPaused3 = true;
  $(this).parent('.fadenavinside').parent('.fadenav').find('.playholder').fadeIn();
  $(this).parent('.fadenavinside').parent('.fadenav').find('.pauseholder').hide();
});
$('.play3').click(function() {
  isPaused3 = false;
  $(this).parent('.fadenavinside').parent('.fadenav').find('.playholder').hide();
  $(this).parent('.fadenavinside').parent('.fadenav').find('.pauseholder').fadeIn();
});

$('.pause4').click(function() {
  isPaused4 = true;
  $(this).parent('.fadenavinside').parent('.fadenav').find('.playholder').fadeIn();
  $(this).parent('.fadenavinside').parent('.fadenav').find('.pauseholder').hide();
});
$('.play4').click(function() {
  isPaused4 = false;
  $(this).parent('.fadenavinside').parent('.fadenav').find('.playholder').hide();
  $(this).parent('.fadenavinside').parent('.fadenav').find('.pauseholder').fadeIn();
});

$('.pause5').click(function() {
  isPaused5 = true;
  $(this).parent('.fadenavinside').parent('.fadenav').find('.playholder').fadeIn();
  $(this).parent('.fadenavinside').parent('.fadenav').find('.pauseholder').hide();
});
$('.play5').click(function() {
  isPaused5 = false;
  $(this).parent('.fadenavinside').parent('.fadenav').find('.playholder').hide();
  $(this).parent('.fadenavinside').parent('.fadenav').find('.pauseholder').fadeIn();
});
    
    
});