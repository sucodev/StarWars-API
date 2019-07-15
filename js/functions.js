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

// Responsável pelo movimento da imagem do fundo
$('#app').backgroundMove({
    movementStrenght: '50'
});

//
// Função para dar efeito de maquina de escrever

function typeWritter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    console.log(textoArray);
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 50 * i);
    });
}

// Ativa o modo de força
function forceMode(){
    // Change color for force mode
    var hud = $('.hud');
    var division = $('.planet_division_header, .planet_division_footer');
    var tag = $('.tag');
    var planet_header = $('.planet_header');
    var planet_name = $('.planet_name');
    var planet_population = $('.planet_population');
    var planet_climate = $('.planet_climate');
    var planet_terrain = $('.planet_terrain');
    var planet_films  = $('.planet_films');
    var planet_footer = $('.planet_footer');
    var button_next = $('#next');

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

}

// Função responsável por criar uma id de páginas randomicas
function randomId(max,min){
    return Math.floor(Math.random()*(max-min+1)+min);
}



let open = document.getElementById('showModalFilms');
let close = document.getElementById('close');
let fade = document.getElementById('fade');
let cntModal = document.getElementById('ctnModal');

open.onclick = function() {fade.style.display = "flex"}

close.onclick = function() {fade.style.display = "none"}

fade.onclick = function() {fade.style.display = "none"}

//cntModal.onclick = function(event) {event.stopPropagation();}