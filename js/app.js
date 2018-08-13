var search = $('.search');
var searchProducts = $('#searchProducts');
var searchText;

search.click(function(e) {
    e.preventDefault();
    searchText = searchProducts.val();
    $('#searchProducts').val("");


    allMovies();
});





function allMovies() {

    $.ajax({
        url: `http://www.omdbapi.com/?apikey=ae8388e5&t=${searchText}`,
        type: 'GET',
        datatype: 'json',
        crossDomain: true
    }).done(

        function(data) {
            console.log(data);
            // var title = data.Title;
            //console.log(title);
            var year = data.Year;
            console.log(year);
            var rated = data.Rated;
            console.log(rated);
            var released = data.Released;
            console.log(released);
            var runtime = data.Runtime;
            console.log(runtime);
            var actors = data.Actors;
            console.log(actors);
            var country = data.Country;
            console.log(country);
            var director = data.Director;
            console.log(director);
            var genre = data.Genre;
            console.log(genre);
            var language = data.Language;
            console.log(language);
            var plot = data.Plot;
            console.log(plot);
            var poster = data.Poster;
            console.log(poster);
            // var ratings = data.Ratings[1].Source;
            // console.log(ratings);
            // var ratingsValue = data.Ratings[1].Value;
            // console.log(ratingsValue);


            //     var template = ` <div class="row">
            //     <div class="col-2">
            //     <img class="img-fluid" src="${data.Poster}" alt="">
            //     </div>
            //     <div class="col-6">
            //         <h1>${data.Title}</h1>
            //     </div>
            // </div>`


            //     $('.movies').append(template);



            var template = document.getElementById('index').innerHTML;
            console.log(template);
            var compile = Handlebars.compile(template);
            var compiledHTML = compile({
                name: `${data.Title}`,
                poster: `${data.Poster}`,
                rated: `Clasificacion: <strong>${data.Rated}</strong>`,
                year: `Fecha de lanzamiento : <strong>${data.Released}</strong>`,
                runtime: `Duracion: <strong>${data.Runtime}</strong>`,
                genre: `Genero: <strong>${data.Genre}</strong>`,
                director: `Director: <strong>${data.Director}</strong>`,
                plot: `<strong>Sinopsis:</strong> ${data.Plot}`,
                language: `Idioma: <strong>${data.Language}</strong>`,
                actors: `Actores: <strong>${data.Actors}<strong>`,
                rating: ` Rating: <strong>${data.imdbRating}</strong>`,

            });
            document.getElementById('action').innerHTML += compiledHTML;











            /*   var temProducts = `<div class="card mt-2" style="width: 18rem;">
               <div class="card-body text-center">
                   <img class="card-img-top img-fluid" src="${photo}" alt="Card image cap">
                   <h5 class="card-title mt-2">${titleProduct}</h5>
                   <p class="card-text h5 mt-2"><strong>Precio: $${priceProduct}</strong></p>
                   <a href="#" class="btn btn-primary mt-2 car" data-product="${titleProduct}" data-price="${priceProduct}">Add To Car</a>
               </div>
            </div>`;

               $('#content').append(temProducts);*/




        }

    ).fail(error);




};

function error() {
    alert("No se pueden cargar los datos");

}

$(document).ready(function() {

    if (searchText.length === 0) {
        $("#movies").empty();
    }

    allMovies();


});