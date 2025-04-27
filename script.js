let backbtn=document.querySelector(".previous");
let forwardbtn=document.querySelector(".forward");
let cards=document.querySelector(".cards");

let forward=()=>{
    cards.scrollLeft +=1400;
}
let backward=()=>{
    cards.scrollLeft -=1400;
}


backbtn.addEventListener("click",backward);
forwardbtn.addEventListener("click",forward);
// gemini code
document.addEventListener('DOMContentLoaded', function() {
    const questionContainers = document.querySelectorAll('.faq-item');

    questionContainers.forEach(container => {
        const questionHeader = container.querySelector('.q1');
        const answerDiv = container.querySelector('.answer');
        const plusIcon = questionHeader.querySelector('.fa-plus');

        answerDiv.style.display = 'none'; // Ensure answers are hidden initially

        questionHeader.addEventListener('click', () => {
            if (answerDiv.style.display === 'none' || answerDiv.style.display === '') {
                answerDiv.style.display = 'block';
                plusIcon.classList.remove('fa-plus');
                plusIcon.classList.add('fa-minus');
            } else {
                answerDiv.style.display = 'none';
                plusIcon.classList.remove('fa-minus');
                plusIcon.classList.add('fa-plus');
            }
        });
    });
});

// --------------sign up page-------------------
let signin=document.querySelector(".signin");

//.................API call....................
let movieName = [
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
  
  let key = "73569bc2";
  let card1=document.querySelector(".cards")
let index=1;
  let Data = async () => {
    const cardsContainer = document.querySelector('.cards');
    
    for(let info of movieName) {
        let url = `https://www.omdbapi.com/?apikey=${key}&t=${encodeURIComponent(info)}`;
        let data = await fetch(url);
        let response = await data.json();
        
        // Create movie card element
        let movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        // Create poster image
        let moviePoster = document.createElement('img');
        moviePoster.classList.add('movie-poster');
        moviePoster.src = response.Poster;
        moviePoster.alt = response.Title;

        //creating h1-tag
        let h1=document.createElement("h1");
        h1.innerHTML=index;


        // Append elements
        movieCard.appendChild(moviePoster);
        movieCard.appendChild(h1);
        cardsContainer.appendChild(movieCard);

        index++;
    }
}

Data();




