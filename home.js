let nav = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});


///sling cards js 
// let backbtn=document.querySelector(".previous");
// let forwardbtn=document.querySelector(".forward");
// let cards=document.querySelector(".cards");

// let forward=()=>{
//     cards.scrollLeft +=1400;
// }
// let backward=()=>{
//     cards.scrollLeft -=1400;
// }
// backbtn.addEventListener("click",backward);
// forwardbtn.addEventListener("click",forward);
///fetching data scnz

// let movieName = [
//     "The Shawshank Redemption",
//     "The Godfather",
//     "Casablanca",
//     "Citizen Kane",
//     "Pulp Fiction",
//     "Schindler's List",
//     "12 Angry Men",
//     "The Dark Knight",
//     "Spirited Away",
//     "Seven Samurai"
//   ];
  
//   let key1 = "73569bc2";
//   let card1=document.querySelector(".cards1")
// let index=1;
//   let Data = async () => {
//     const cardsContainer = document.querySelector('.cards');
    
//     for(let info of movieName) {
//         let url = `https://www.omdbapi.com/?apikey=${key1}&t=${encodeURIComponent(info)}`;
//         let data = await fetch(url);
//         let response = await data.json();
        
//         // Create movie card element
//         let movieCard = document.createElement('div');
//         movieCard.classList.add('movie-card');
        
//         // Create poster image
//         let moviePoster = document.createElement('img');
//         moviePoster.classList.add('movie-poster');
//         moviePoster.src = response.Poster;
//         moviePoster.alt = response.Title;

//         //creating h1-tag
//         let h1=document.createElement("h1");
//         h1.innerHTML=index;


//         // Append elements
//         movieCard.appendChild(moviePoster);
//         // movieCard.appendChild(h1);
//         cardsContainer.appendChild(movieCard);

//         index++;
//     }
// }

// Data();

// action movies
// let keywords = [
//     "Avengers",
//     "Batman",
//     "Spiderman",
//     "Superman",
//     "Harry Potter",
//     "Star Wars",
//     "Jurassic Park",
//     "Pirates of the Caribbean",
//     "Transformers",
//     "Fast and Furious"
//   ];
  

////from chatgpt

  let key = "73569bc2";

// --- New On Netflix movies ---
let netflixMovies = [
  "The Shawshank Redemption",
  "The Godfather",
  "Casablanca",
  "Citizen Kane",
  "Pulp Fiction",
  "Schindler's List",
  "12 Angry Men",
  "The Dark Knight",
  "Spirited Away",
  "Seven Samurai"
];

// --- Action and Adventure movies ---
let actionMovies = [
  "Avengers",
  "Batman",
  "fast and furious",
  "ip man",
  "Harry Potter",
  "Star Wars",
  "Jurassic Park",
  "Pirates of the Caribbean",
  "Transformers",
  "Fast and Furious"
];

//bollywood movies
let bollywood = [
    "Sholay",
    "Dilwale Dulhania Le Jayenge",
    "3 Idiots",
    "Dangal",
    "Lagaan",
    "Mother India",
    "Mughal-e-Azam",
    "Kabhi Khushi Kabhie Gham",
    "Pyaasa",
    "Zindagi Na Milegi Dobara"
  ];

  //korean
  let korean = [
    "Parasite",
    "Oldboy",
    "Train to Busan",
    "The Handmaiden",
    "Memories of Murder",
    "The Wailing",
    "Burning",
    "The Host",
    "Spring, Summer, Fall, Winter... and Spring",
    "Mother"
  ];

  //punjabi
  let punjabi = [
    "Carry On Jatta",
    "Jatt & Juliet",
    "Qismat",
    "Angrej",
    "sufna",
    "Punjab 1984",
    "Ardaas",
    "Chal Mera Putt",
    "Nikka Zaildar",
    "Laung Laachi"
  ];
  
  
// Reusable function to fetch and display movies
async function fetchMovies(moviesArray, containerSelector) {
  let container = document.querySelector(containerSelector);
  for (let name of moviesArray) {
    let url = `https://www.omdbapi.com/?apikey=${key}&t=${encodeURIComponent(name)}`;
    let res = await fetch(url);
    let data = await res.json();

    let movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    let poster = document.createElement("img");
    poster.classList.add("movie-poster");
    poster.src = data.Poster;
    poster.alt = data.Title;

    movieCard.appendChild(poster);
    container.appendChild(movieCard);
  }
}

// Call the function separately for both sections
fetchMovies(netflixMovies, '.cards1');
fetchMovies(actionMovies, '.cards2');
fetchMovies(bollywood, '.cards3');
fetchMovies(korean, '.cards4');
fetchMovies(punjabi, '.cards5');

// --- Sliding functionality ---

let previous1 = document.querySelector(".previous1");
let forward1 = document.querySelector(".forward1");
let cards1 = document.querySelector(".cards1");

previous1.addEventListener("click", () => {
  cards1.scrollLeft -= cards1.clientWidth;
});
forward1.addEventListener("click", () => {
  cards1.scrollLeft += cards1.clientWidth;
});

let previous2 = document.querySelector(".previous2");
let forward2 = document.querySelector(".forward2");
let cards2 = document.querySelector(".cards2");

previous2.addEventListener("click", () => {
  cards2.scrollLeft -= cards2.clientWidth;
});
forward2.addEventListener("click", () => {
  cards2.scrollLeft += cards2.clientWidth;
});

let previous3 = document.querySelector(".previous3");
let forward3 = document.querySelector(".forward3");
let cards3 = document.querySelector(".cards3");

previous3.addEventListener("click", () => {
  cards3.scrollLeft -= cards3.clientWidth;
});
forward3.addEventListener("click", () => {
  cards3.scrollLeft += cards3.clientWidth;
});

let previous4 = document.querySelector(".previous4");
let forward4 = document.querySelector(".forward4");
let cards4 = document.querySelector(".cards4");

previous4.addEventListener("click", () => {
  cards4.scrollLeft -= cards4.clientWidth;
});
forward4.addEventListener("click", () => {
  cards4.scrollLeft += cards4.clientWidth;
});

let previous5 = document.querySelector(".previous5");
let forward5 = document.querySelector(".forward5");
let cards5 = document.querySelector(".cards5");

previous5.addEventListener("click", () => {
  cards5.scrollLeft -= cards5.clientWidth;
});
forward5.addEventListener("click", () => {
  cards5.scrollLeft += cards5.clientWidth;
});



//for home pic
let img=document.querySelector(".img")

let homeimg="ip man"
let home=async (params) => {
    let homepic =await fetch (`https://www.omdbapi.com/?apikey=${key}&t=${encodeURIComponent(homeimg)}`)
    let response=await homepic.json();
    
    console.log(response);

}
// home();

//..................Account section..............
let menu=document.querySelector(".dropdown-menu");
let account=document.querySelector(".account");
account.addEventListener("mouseenter",()=>{
    menu.classList.add("visible");
})
account.addEventListener("mouseleave",()=>{
    menu.classList.remove("visible")
})


//overlay movies


// Movie Details Modal Logic
const movieDetailsOverlay = document.createElement('div');
movieDetailsOverlay.className = 'movie-details-overlay';
movieDetailsOverlay.innerHTML = `
  <div class="movie-details-content">
    <button class="close-btn">&times;</button>
    <img class="details-poster" src="" alt="">
    <div class="details-text">
      <h2 class="details-title"></h2>
      <div class="details-meta">
        <span class="details-year"></span>
        <span class="details-runtime"></span>
        <span class="details-rating"></span>
      </div>
      <p class="details-plot"></p>
      <p class="details-cast"></p>
      <p class="details-genre"></p>
    </div>
  </div>
`;
document.body.appendChild(movieDetailsOverlay);

// Function to show movie details
async function showMovieDetails(movieTitle) {
  try {
    const url = `https://www.omdbapi.com/?apikey=${key}&t=${encodeURIComponent(movieTitle)}`;
    const res = await fetch(url);
    const data = await res.json();

    // Populate the modal with movie data
    document.querySelector('.details-poster').src = data.Poster;
    document.querySelector('.details-title').textContent = data.Title;
    document.querySelector('.details-year').textContent = data.Year;
    document.querySelector('.details-runtime').textContent = data.Runtime;
    document.querySelector('.details-rating').textContent = `IMDb: ${data.imdbRating}`;
    document.querySelector('.details-plot').textContent = data.Plot;
    document.querySelector('.details-cast').textContent = `Cast: ${data.Actors}`;
    document.querySelector('.details-genre').textContent = `Genre: ${data.Genre}`;

    // Show the modal
    movieDetailsOverlay.classList.add('active');
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
}

// Close modal function
function closeMovieDetails() {
  movieDetailsOverlay.classList.remove('active');
}

// Event listeners
document.querySelector('.close-btn').addEventListener('click', closeMovieDetails);
movieDetailsOverlay.addEventListener('click', (e) => {
  if (e.target === movieDetailsOverlay) {
    closeMovieDetails();
  }
});

// Add click event to all movie cards
function setupMovieCardClickEvents() {
  document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', () => {
      const movieTitle = card.querySelector('img').alt;
      showMovieDetails(movieTitle);
    });
  });
}

// Call this after creating all movie cards
// Modify your fetchMovies function to call this after appending cards
async function fetchMovies(moviesArray, containerSelector) {
  let container = document.querySelector(containerSelector);
  container.innerHTML = ''; // Clear previous cards
  
  for (let name of moviesArray) {
    let url = `https://www.omdbapi.com/?apikey=${key}&t=${encodeURIComponent(name)}`;
    let res = await fetch(url);
    let data = await res.json();

    let movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    let poster = document.createElement("img");
    poster.classList.add("movie-poster");
    poster.src = data.Poster;
    poster.alt = data.Title;

    movieCard.appendChild(poster);
    container.appendChild(movieCard);
  }
  
  // Setup click events after cards are created
  setupMovieCardClickEvents();
}























