
const searchBtn = document.getElementById('search-btn');
const container = document.querySelector(".container"); // get <div class="container"></div>

// 可以用了
// function findMovie() {
//     fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d6b87bc9")
//       .then((response) => {
//         if (!response.ok) {
//           throw Error("Could not fetch the data for that resource");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         // get the image of API
//         // const img = document.createElement("img");
//         // img.src = `${data.Poster}`;
//         // container.appendChild(img);
//         let htmlSegment = `<div class="card">
//                             <img src="${data.Poster}" >
//                             <div class="description">
//                               <h2>${data.Title}</h2>
//                               <p><small> ${data.Plot}</small></p>
//                             </div>
//                           </div>`;
//         container.innerHTML = htmlSegment;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
// }

// findMovie();

// display user input
searchBtn.addEventListener('click', () => {
  var userInput = document.getElementById('userInput').value;
  container.innerHTML = `<h1>${userInput}</h1>`;
  displayMovie(userInput);
});

function displayMovie(userInput) {
  const url = `http://www.omdbapi.com/?t=${userInput}&apikey=d6b87bc9`
  fetch(url)
    .then(response => {return response.json();})
      .then(data => {
        console.log(data);
        container.innerHTML = `<div class="card">
                                  <img src=${data.Poster}/>
                                  <h2>${data.Title} <small>(${data.Year})</small></h2>
                                  <p><strong>Directed by</strong> ${data.Director}</p>
                                  <hr>
                                  <small>Genres - <strong>${data.Genre}</strong>
                                   | Run Time - <strong>${data.Runtime}</strong>
                                   | Countries - <strong>${data.Country}</strong>
                                   | Language - <strong>${data.Language}</strong></small>
                                  <hr>
                                  <h4>Overview </h4>
                                  <p>${data.Plot}</p>
                              </div>`;
        });
}

