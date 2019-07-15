document.addEventListener('DOMContentLoaded', randomPlanets);


function randomPlanets(){
        var id = randomId(61,1); // paginas random de 1 a 61
        var request = new XMLHttpRequest();
        var URL = 'https://swapi.co/api/planets/' + id;

        request.open('GET', URL, true);
        request.onload = function(){
            if (request.status >= 200 && request.status < 400) {
                var response = JSON.parse(request.responseText);

                // // Recebe o numero da pagina
                // let planetPage = document.querySelector('#planetPage');
                // planetPage.innerHTML = 'Page id = ' + id;

              // Recebe o nome do planeta
                const planetName = document.querySelector('#planetName');
                planetName.innerHTML = response.name;

                typeWritter(planetName);

                // Recebe a população
                const population = document.querySelector('#population');
                population.innerHTML = response.population;

                typeWritter(population);

                // Recebe o clima
                const climate = document.querySelector('#climate');
                climate.innerHTML = '  ' + response.climate;

                typeWritter(climate);

                // Recebe o terreno
                const terrain = document.querySelector('#terrain');
                terrain.innerHTML = '  ' + response.terrain;

                // Retorna a quantidade de filmes
                const movies = document.querySelector('#movies');
                const films = response.films.length;
                    movies.innerHTML = '  ' + films + ' films ';

                if(films == 1){
                    filmsList = movies.innerHTML = '  ' + films  + ' film ';
                }else{
                    filmList = movies.innerHTML = '  ' + films + ' films';
                    }
                }
            typeWritter(movies);
        };
        request.send();
    }

    $( "#next" ).click(function() {
        var id = randomId(61,1); // paginas random de 1 a 61
        var request = new XMLHttpRequest();
        var URL = 'https://swapi.co/api/planets/' + id;

        request.open('GET', URL, true);
        request.onload = function(){
            if (request.status >= 200 && request.status < 400) {
                var response = JSON.parse(request.responseText);

                // // Recebe o numero da pagina
                // let planetPage = document.querySelector('.hud');
                // planetPage.innerHTML = 'Page id = ' + id;

                // Recebe o nome do planeta
                const planetName = document.querySelector('#planetName');
                planetName.innerHTML = response.name;

                typeWritter(planetName);

                // Recebe a população
                const population = document.querySelector('#population');
                population.innerHTML = response.population;

                typeWritter(population);

                // Recebe o clima
                const climate = document.querySelector('#climate');
                climate.innerHTML = response.climate;

                typeWritter(climate);

                // Recebe o terreno
                const terrain = document.querySelector('#terrain');
                terrain.innerHTML = '  ' + response.terrain;

                typeWritter(terrain);

                // Retorna a quantidade de filmes
                const movies = document.querySelector('#movies');
                const films = response.films.length;

                // let filmsList = movies.innerHTML = 'Movies: ' + films + ' films';
                if(films == 1){
                    const filmsList = movies.innerHTML = + ' ' + films  + ' film';
                }else{
                    const filmsList = movies.innerHTML = + ' ' + films + ' films';
                    }
                }
                typeWritter(movies);
        };
        request.send();
    }
    );


