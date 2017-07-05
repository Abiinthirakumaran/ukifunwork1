SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
    SC.stream('/tracks/258463332',function(sound){
         $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/250711755',function(sound){
         $('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/195960563',function(sound){
         $('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop3').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/278002889',function(sound){
         $('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop4').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/207323417',function(sound){
         $('#start5').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop5').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/169934686',function(sound){
         $('#start6').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop6').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

});
