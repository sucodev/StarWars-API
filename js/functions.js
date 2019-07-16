/*
* Start Background Move - by : Sameera Liyanagee
*/
(function($){
    $.fn.backgroundMove=function(options){
            var defaults={
            movementStrength:'80'
        },
        options=$.extend(defaults,options);

         var $this = $(this);

           var movementStrength = options.movementStrength;
            var height = movementStrength / $(window).height();
            var width = movementStrength / $(window).width();
            $this.mousemove(function(e){
                      var pageX = e.pageX - ($(window).width() / 2);
                      var pageY = e.pageY - ($(window).height() / 2);
                      var newvalueX = width * pageX * -1 - 25;
                      var newvalueY = height * pageY * -1 - 50;
                      $this.css("background-position", newvalueX+"px     "+newvalueY+"px");
            });

        }
})(jQuery);

// ********** Background Move Effect  **********
$('#app').backgroundMove({
    movementStrenght: '50'
});
// ********** End Background Move Effect  **********

// ********** Type Writter Effect  **********
function typeWritter(element) {
    const textoArray = element.innerHTML.split('');
    console.log(textoArray);
    element.innerHTML = '';
    textoArray.forEach((letter, i) => {
      setTimeout(() => element.innerHTML += letter, 50 * i);
    });
}
// ********** End Type Writter Effect  **********

// ********** Force Mode  **********
function forceMode(){
    var hud = $('.hud, .hud_options');
    var division = $('.planet_division_header, .planet_division_footer');
    var tag = $('.tag');
    var planet_header = $('.planet_header');
    var planet_name = $('.planet_name');
    var planet_population = $('.planet_population');
    var planet_climate = $('.planet_climate');
    var planet_terrain = $('.planet_terrain');
    var planet_films  = $('.planet_films, i');
    var planet_footer = $('.planet_footer');
    var button_next = $('#next');
    var button_force_on = $('.button-force-on');
    var icons = $('i');

    hud.toggleClass('-hud-force-mode');
    division.toggleClass('-division-force-mode');
    tag.toggleClass('-tag-force-mode');
    planet_header.toggleClass('-planet-header-force-mode');
    planet_name.toggleClass('-planet-name-force-mode');
    planet_population.toggleClass('-planet-population-force-mode');
    planet_climate.toggleClass('-planet-climate-force-mode');
    planet_terrain.toggleClass('-planet-terrain-force-mode');
    planet_films.toggleClass('-planet-films-force-mode');
    planet_footer.toggleClass('-planet-footer-force-mode');
    button_next.toggleClass('-button-next-force-mode');
    button_force_on.toggleClass('-force-mode');
    icons.toggleClass('-icons-force-mode');
}
// ********** End Force Mode **********

// ********** Random Planet Pages **********
    function randomId(max,min){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
// ********** End Random Planet Pages **********

var open = document.getElementById('showModalFilms');
var close = document.querySelector('#close');
var fade = document.getElementById('fade');

open.onclick = function() {fade.style.display = "flex"}

fade.onclick = function() {fade.style.display = "none"}

close.onclick = function() {fade.style.display = "none"}


function newRequestStatus(){
    if(newRequest.status >= 200 && newRequest.status < 400){

    }
}