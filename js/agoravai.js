$('#next').click(function(event){
    // ********** Variaveis relacionadas aos resultados dos planetas **********
    const planetName = document.querySelector('#planetName'); // Seleciona o campo #planetName
    const population = document.querySelector('#population'); // Seleciona o campo #population
    const climate = document.querySelector('#climate'); // Seleciona o campo #climate
    const terrain = document.querySelector('#terrain'); // Seleciona o campo #terrain

    // ********** Variaveis relacionadas aos resultados dos filmes **********
    const numberMovies = document.querySelector('#movies'); // Seleciona o campo #movies
    const showMovies = document.querySelector('#featuredFilms'); // Seleciona o campo #featuredFilms

    // ********** Variaveis relacionadas aos resultados da requisição **********
    const idPlanet = randomId(61,1); // Função responsável pelo id do planeta
    const request = new XMLHttpRequest; // Criamos o objeto XMLHttpRequest
    const URL = 'https://swapi.co/api/planets/' + idPlanet; // Concatenação da URL com o id do planeta

    // ********** Configuração dos parâmetros **********
    request.open('GET', URL, true);
    request.onload = function requestStatus(){
        var response = JSON.parse(request.responseText);
        planetName.innerHTML = response.name; // Imprimir a resposta no campo #planetName
        typeWritter(planetName);
        // ********** Recebe a população **********
        population.innerHTML = response.population; // Imprimir a resposta no campo #population
        typeWritter(population);
        // ********** Recebe o clima **********
        climate.innerHTML = '  ' + response.climate; // Imprimir a resposta no campo #climate
        typeWritter(climate);
        // ********** Recebe o terreno **********
        terrain.innerHTML = '  ' + response.terrain; // Imprimir a resposta no campo #terrain
        typeWritter(terrain);
    }
    request.send();
});