document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        $('#next').click(function(){
            showPlanets();
        });
    }
}




// ********** Configuração dos parâmetros **********

function showPlanets(){
        // ********** Variaveis relacionadas aos resultados dos planetas **********
        let planetName = document.querySelector('#planetName'); // Seleciona o campo #planetName
        let population = document.querySelector('#population'); // Seleciona o campo #population
        let climate = document.querySelector('#climate'); // Seleciona o campo #climate
        let terrain = document.querySelector('#terrain'); // Seleciona o campo #terrain

        // ********** Variaveis relacionadas aos resultados dos filmes **********
        let numberMovies = document.querySelector('#movies'); // Seleciona o campo #movies
        let showMovies = document.querySelector('#featuredFilms'); // Seleciona o campo #featuredFilms
        // ********** Variaveis relacionadas aos resultados da requisição **********
        let idPlanet = randomId(61,1); // Função responsável pelo id do planeta
        let request = new XMLHttpRequest; // Criamos o objeto XMLHttpRequest
        let URL = 'https://swapi.co/api/planets/' + idPlanet; // Concatenação da URL com o id do planeta

        // ********** Configuração dos parâmetros **********
        request.onreadystatechange = function(){
            if(request.readyState === 4){
                if(request.status == 200){
                    response = JSON.parse(request.responseText);
                    console.log(response);

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

                    // ********** Recebe a quantidade de filmes **********
                    let moviesCount = response.films.length;
                    if(moviesCount == 1){
                        // Vai imprimir na tela a quantidade de filmes no singular caso a contagem seja igual a 1
                        numberMovies.innerHTML = '  ' + moviesCount  + ' film ';
                        }else{
                        // Vai imprimir na tela a quantidade de filmes no plural caso seja a contagem seja maior que 1
                        numberMovies.innerHTML = '  ' + moviesCount + ' films';
                    }

                    var lista = document.querySelector('#featuredFilms');
                    lista.innerHTML = "";

                    for(var e = 0; e < response.films.length ; e++){ // Verifica se a quantidade filmes é maior do que zero
                        (function(idFilms){
                            const films = response.films[idFilms]; // Essa variavel armazena o endereço : 'https://swapi.co/films/' + o id dos filmes dentro de um array
                            const newUrlHost = films;
                            const newRequest = new XMLHttpRequest(); // Cria um novo objeto XMLHTTPRequest
                            newRequest.open('GET', newUrlHost, true); // Configuração dos parâmetros - Método GET, URL e conexão assíncrona
                            newRequest.onload = function newRequestStatus() {
                                    var newResponse =  JSON.parse(newRequest.responseText);

                                    const moviesList = document.createElement('li'); // Criamos um novo elemento li ( para ser exibido como lista )
                                    moviesList.textContent = newResponse.title;
                                    showMovies.appendChild(moviesList); // Conecta o elemento filho ( movieList ) no elemento pai ( showMovies )

                            };
                            newRequest.send(newRequest.abort());  // Enviando as requisições para o servidor
                        })(e);
                    }
                }
            }
        }

        request.open('GET', URL, true);
        request.send();
    }