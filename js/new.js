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
        request.open('GET', URL, true); // Método GET, URL e conexão assíncrona
        request.onload = function(){
            if (request.status >= 200 && request.status < 400) { // Verifica se não ocorreu erros no carregamento da página
                var response = JSON.parse(request.responseText);

                        // Recebe as variavéis e imprime elas nos seus respectivos campos
                        // O typeWritter é uma funcionalidade que se cria o efeito similar a uma maquina de escrever

                        // ********** Recebe o nome do planeta **********
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

                        // ********** Variavel para realizar a contagem de filmes  **********
                        const moviesCount = response.films.length;
                        // Se a contagem de filmes for == 1
                        if(moviesCount == 1){
                        // Vai imprimir na tela a quantidade de filmes no singular caso a contagem seja igual a 1
                            numberMovies.innerHTML = '  ' + moviesCount  + ' film ';
                        }else{
                        // Vai imprimir na tela a quantidade de filmes no plural caso seja a contagem seja maior que 1
                            numberMovies.innerHTML = '  ' + moviesCount + ' films';
                        }
                        // ********** Recebe os titulos dos filmes **********
                        for(var e = 0; e < response.films.length ; e++){ // Verifica se a quantidade filmes é maior do que zero
                            (function(idFilms){

                                const films = response.films[idFilms]; // Essa variavel armazena o endereço : 'https://swapi.co/films/' + o id dos filmes dentro de um array
                                const newUrlHost = films;
                                const newRequest = new XMLHttpRequest(); // Cria um novo objeto XMLHTTPRequest
                                newRequest.open('GET', newUrlHost, true); // Configuração dos parâmetros - Método GET, URL e conexão assíncrona
                                newRequest.addEventListener('load', function(){
                                    if(newRequest.status >= 200 && newRequest.status < 400){ // Verifica se não ocorreu erros no carregamento da página
                                        var newResponse =  JSON.parse(newRequest.responseText);

                                        const moviesList = document.createElement('li'); // Criamos um novo elemento li ( para ser exibido como lista )
                                        moviesList.textContent = newResponse.title;
                                        showMovies.appendChild(moviesList); // Conecta o elemento filho ( movieList ) no elemento pai ( showMovies )
                                    }
                                });
                                newRequest.send(); // Enviando as requisições para o servidor
                                event.preventDefault();

                            })(e);
                        }

            }
        };
        request.send(); // Enviando as requisições para o servidor
        event.preventDefault();

        // document.getElementById('next').addEventListener('click', function(event){
        //     alert('next planet');
        // });
});