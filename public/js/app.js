// -------------- Genre Tracking Objects

const genreCount = {
  28: 0,
  12: 0,
  16: 0,
  35: 0,
  80: 0,
  99: 0,
  18: 0,
  10751: 0,
  14: 0,
  36: 0,
  27: 0,
  10402: 0,
  9648: 0,
  10749: 0,
  878: 0,
  10770: 0,
  53: 0,
  10752: 0,
  37: 0,
};

const genreIncrementCount = {
  childhood: {
    12: 2,
    16: 3,
    35: 1,
    10751: 2,
    14: 2,
    10402: 2,
    9648: 1,
    878: 2,
    10770: 1,
    37: 2,
  },
  adulthood: {
    28: 2,
    80: 3,
    99: 2,
    18: 2,
    36: 2,
    27: 2,
    10749: 2,
    53: 1,
    10752: 2,
  },
  "ask permission": {
    16: 2,
    18: 2,
    10751: 3,
    14: 1,
    10402: 2,
    10749: 1,
    10770: 2,
  },
  "ask forgiveness": {
    28: 3,
    12: 3,
    35: 2,
    80: 2,
    99: 1,
    27: 3,
    9648: 2,
    878: 2,
    53: 3,
    10752: 1,
    37: 1,
  },
  sandwich: {
    16: 2,
    35: 2,
    99: 2,
    10751: 2,
    14: 1,
    10402: 1,
    10770: 2,
    10752: 1,
  },
  spaghetti: {
    28: 1,
    12: 1,
    80: 2,
    18: 1,
    36: 2,
    27: 1,
    9648: 3,
    10749: 1,
    878: 1,
    53: 2,
    37: 3,
  },
  air: {
    28: 1,
    12: 1,
    16: 1,
    35: 3,
    10751: 2,
    14: 3,
    10402: 3,
    10749: 2,
    878: 3,
  },
  earth: {
    80: 1,
    99: 3,
    18: 1,
    36: 3,
    27: 1,
    9648: 2,
    10770: 1,
    53: 1,
    10752: 3,
    37: 1,
  },
  blue: {
    16: 1,
    35: 1,
    80: 1,
    99: 2,
    18: 3,
    10751: 1,
    36: 1,
    10402: 1,
    10770: 3,
  },
  red: {
    28: 2,
    12: 2,
    14: 2,
    27: 2,
    9648: 1,
    10749: 3,
    878: 1,
    53: 2,
    10752: 2,
    37: 2,
  },
  dragon: {
    12: 3,
    16: 1,
    10751: 3,
    14: 3,
    36: 1,
    10402: 1,
    10749: 2,
    878: 2,
    10770: 1,
  },
  spaceship: {
    28: 2,
    35: 1,
    80: 1,
    99: 1,
    18: 1,
    27: 3,
    9648: 2,
    53: 3,
    10752: 2,
    37: 2,
  },
  present: {
    28: 1,
    16: 2,
    35: 2,
    18: 3,
    36: 3,
    27: 1,
    10770: 2,
    53: 1,
    10752: 1,
    37: 1,
  },
  future: {
    12: 1,
    80: 2,
    99: 3,
    10751: 2,
    14: 2,
    10402: 2,
    9648: 3,
    10749: 1,
    878: 3,
  },
  vacation: {
    28: 1,
    12: 2,
    35: 2,
    10751: 1,
    14: 2,
    10402: 2,
    10749: 3,
    10752: 1,
  },
  staycation: {
    16: 3,
    80: 2,
    99: 2,
    18: 2,
    36: 2,
    27: 2,
    9648: 1,
    878: 1,
    10770: 2,
    53: 1,
    37: 1,
  },
  bowling: {
    16: 1,
    35: 3,
    80: 1,
    99: 2,
    10751: 1,
    36: 1,
    10749: 1,
    10770: 3,
    37: 3,
  },
  "laser tag": {
    28: 3,
    12: 1,
    18: 1,
    14: 1,
    27: 1,
    10402: 1,
    9648: 1,
    878: 2,
    53: 2,
    10752: 3,
  },
  hiking: {
    12: 2,
    16: 2,
    35: 1,
    10751: 2,
    14: 1,
    10402: 3,
    9648: 2,
    878: 1,
    10752: 2,
    37: 2,
  },
  sailing: {
    28: 2,
    80: 3,
    99: 1,
    18: 2,
    36: 2,
    27: 2,
    10749: 2,
    10770: 1,
    53: 2,
  },
  dancing: {
    28: 3,
    12: 2,
    80: 1,
    14: 3,
    36: 1,
    27: 2,
    9648: 1,
    878: 1,
    53: 1,
    10752: 1,
  },
  singing: {
    16: 2,
    35: 3,
    99: 1,
    18: 2,
    10751: 2,
    10402: 3,
    10749: 2,
    10770: 1,
    37: 2,
  },
  "cross out": {
    12: 3,
    16: 1,
    35: 2,
    80: 2,
    18: 2,
    36: 2,
    27: 3,
    10749: 1,
    53: 2,
    37: 2,
  },
  erase: {
    28: 2,
    99: 2,
    10751: 2,
    14: 1,
    10402: 1,
    9648: 3,
    878: 1,
    10770: 2,
    10752: 2,
  },
  smoothie: {
    28: 1,
    16: 1,
    99: 3,
    10751: 1,
    14: 1,
    10402: 2,
    878: 2,
    10770: 2,
    10752: 2,
  },
  coffee: {
    12: 2,
    35: 2,
    80: 2,
    18: 1,
    36: 1,
    27: 2,
    9648: 2,
    10749: 1,
    53: 1,
    10752: 2,
  },
  shower: {
    28: 2,
    12: 1,
    99: 2,
    36: 3,
    10402: 2,
    9648: 2,
    878: 2,
    10770: 1,
    53: 2,
  },
  bath: {
    16: 2,
    35: 1,
    80: 1,
    18: 3,
    10751: 1,
    14: 2,
    27: 1,
    10749: 2,
    10752: 3,
    37: 3,
  },
  sweet: {
    16: 3,
    35: 1,
    18: 1,
    10751: 3,
    14: 2,
    10402: 1,
    10749: 3,
    10770: 3,
  },
  spicy: {
    28: 1,
    12: 1,
    80: 3,
    99: 1,
    36: 2,
    27: 1,
    9648: 1,
    878: 3,
    53: 3,
    10752: 1,
    37: 1,
  },
};

const comparisonOptions = [
  ['New York', 'Seoul'], 
  ['Bangkok', 'Las Vegas'], 
  ['London', 'Paris'], 
  ['iguana', 'dolphin'], 
  ['dine-in', 'take-out'], 
  ['by boat', 'by train'], 
  ['awkward humor', 'witty humor'], 
  ['hairspray', 'mousse'], 
  ['grunge', 'glam'], 
  ['breakfast', 'brunch'], 
  ['camping', 'skiing'], 
  ['card games', 'board games'], 
  ['zombies', 'vampires'], 
  ['childhood', 'adulthood'],
  ['ask permission', 'ask forgiveness'],
  ['sandwich', 'spaghetti'],
  ['air', 'earth'],
  ['blue', 'red'], 
  ['dragon', 'spaceship'],
  ['present', 'future'],
  ['vacation', 'staycation'],
  ['bowling', 'laser tag'],
  ['hiking', 'sailing'],
  ['dancing', 'singing'],
  ['cross out', 'erase'],
  ['smoothie', 'coffee'],
  ['suit', 'sweats'],
  ['shower', 'bath'],
  ['sweet', 'spicy']
];

// -------------- Search Criteria Functions
function randomIndexGenerator(arr) {
  return Math.floor(Math.random() * arr.length);
}

function generateQuestionnaire() {
  const indices = [];
  const questionsArr = [];

  for (let i = 0; i < 10; i++) {
    let index = randomIndexGenerator(comparisonOptions);
    while (indices.includes(index)) {
      index = randomIndexGenerator(comparisonOptions);
    }
    indices.push(index);
    const options = comparisonOptions[index];
    if (Math.random() > 0.5) {
      [options[0], options[1]] = [options[1], options[0]];
    }
    
    const questionEl = document.createElement('div')
    questionEl.classList.add('options-div');

    options.forEach((option, i) => {
      const choice = document.createElement('button')
      choice.classList.add("btn", "btn-outline-primary")
      choice.innerText = options[i];
      questionEl.appendChild(choice);
    })
    questionsArr.push(questionEl);
  }
  return questionsArr;
}

function incrementGenre(choice) {
  const genresToInc = Object.keys(genreIncrementCount[choice]);
  genresToInc.forEach(genre => {
    genreCount[genre] += genreIncrementCount[choice][genre];
  })
}

function getTopGenres(genreCountObj) {
  // I know this is WAC af but let's dry it up later
  let paramString = [];
  let paramString2 = [];
  let paramString3 = [];
  // sort genres in descending order
  // https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
  const sortedGenres = [];
  for (genre in genreCountObj) {
    sortedGenres.push([genre, genreCountObj[genre]]);
  }
  sortedGenres.sort((a, b) => b[1] - a[1]);

  paramString.push(sortedGenres[0][0], sortedGenres[1][0])
  paramString2.push(sortedGenres[2][0], sortedGenres[1][0])
  paramString3.push(sortedGenres[2][0], sortedGenres[0][0])

  // add top genres into value of input for req.query
  const genreParams = paramString.join(',').concat('|').concat(paramString2.join(',')).concat('|').concat(paramString3.join(','))
  const genreInput = document.getElementById('genre_ids')
  genreInput.setAttribute('value', genreParams)
}

function addQueryParams(choice) {
  const langInput = document.getElementById('language')
  const voteCountInput = document.getElementById('vote_count_gte')

  const voteInput = document.getElementById('vote_average_gte')
  const voteInputLTE = document.getElementById('vote_average_lte')

  const runtimeInput = document.getElementById('with_runtime_gte')
  const runtimeInputLTE = document.getElementById('with_runtime_lte')

  const dateInput = document.getElementById('release_date_gte')
  const dateInputLTE = document.getElementById('release_date_lte')

  switch (choice) {
    case 'Las Vegas':
    case 'London':
    case 'New York':
      langInput.setAttribute('value', 'en')
      break;
    case 'Paris':
    case 'Bangkok':
    case 'Seoul':
      langInput.setAttribute('value', '')
      break;
    case 'witty humor':
    case 'dolphin':
      voteInput.setAttribute('value', 7.3)
      voteInputLTE.setAttribute('value', '')
      break;
    case 'awkward humor':
    case 'iguana':
      voteInputLTE.setAttribute('value', 7.5)
      voteInput.setAttribute('value', '')
      break;
    case 'by boat':
    case 'dine-in':
      runtimeInput.setAttribute('value', 90)
      runtimeInputLTE.setAttribute('value', '')
      break;
    case 'by train':
    case 'take-out':
      runtimeInputLTE.setAttribute('value', 100)
      runtimeInput.setAttribute('value', '')
      break;
    case 'ask permission':
    case 'brunch':
    case 'sweats':
      dateInput.setAttribute('value', 1985)
      dateInputLTE.setAttribute('value', '')
      break;
    case 'vampires':
    case 'card games':
    case 'childhood':
      dateInputLTE.setAttribute('value', 2010)
      dateInput.setAttribute('value', '')
      break;
    case 'grunge':
    case 'camping':
    case 'bowling':
      dateInputLTE.setAttribute('value', 2000)
      dateInput.setAttribute('value', '')
      break;
    case 'glam':
    case 'hairspray':
    case 'Paris':
      dateInputLTE.setAttribute('value', 1990)
      dateInput.setAttribute('value', '')
      break;
    case 'suit':
      dateInputLTE.setAttribute('value', 1960)
      dateInput.setAttribute('value', '')
      break;
    case 'skiing':
      voteCountInput.setAttribute('value', 300)
      break;
  }
}


// -------------- Functions

function confirmDelete() {
  document.getElementById('delete-button').classList.add('hide-content');
  document.getElementById('confirm-delete-button').classList.remove('hide-content');
}

// https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function confirmAdd() {
  console.log('added movie')
  movieAlertH2.innerText = 'movie added!';
  await sleep(1000);
  movieAlertH2.innerText = 'click a movie to add it to your playlist';
}

// -------------- Event Listeners
const quizletEl = document.querySelector('.quizletForm');
const startQuizBtn = document.querySelector('.start-quiz');
const genreIdsArr = Object.keys(genreCount);
const movieCarousel = document.getElementById('movieCarousel');
const reviewBtn = document.getElementById('review-playlist');
const createBtn = document.querySelector('.create-playlist-form');
const movieAlertH2 = document.getElementById('added-movie-alert');
let questionsArr;
let questionIndex = 0;

if (startQuizBtn) {
  startQuizBtn.addEventListener('click', () => {
    console.log('start button clicked')
    questionsArr = generateQuestionnaire();
    quizletEl.appendChild(questionsArr[questionIndex]);
    startQuizBtn.remove();
  })
}

if (quizletEl) {
  quizletEl.addEventListener('click', (e) => {
    const userChoice = e.target.innerText;
    console.log('chosen option: ', userChoice);
    if (genreIncrementCount.hasOwnProperty(userChoice)) {
      incrementGenre(userChoice);
      console.log('------------------')
      console.log(genreCount)
    }
    addQueryParams(userChoice);

    if (questionIndex === questionsArr.length - 1) {
      getTopGenres(genreCount)

      // set object counters back to original state
      genreIdsArr.forEach(genre => genreCount[genre] = 0)
      questionIndex = 0;
      queryParams = {"vote_count_gte": 100};
  
      const submitBtn = document.createElement('button');
      submitBtn.innerText = 'get movies';
      submitBtn.setAttribute('type', 'submit');
      quizletEl.appendChild(submitBtn);


    } else {
      questionIndex++;
      quizletEl.appendChild(questionsArr[questionIndex]);
    }
    document.querySelector('.options-div').remove();
  })
}

if (reviewBtn) {
  reviewBtn.addEventListener('click', () => {
    createBtn.classList.toggle('display-content');
    // fix this stuffffffffff (styles.css classes)
    document.querySelector('.movies-display').classList.toggle('hide-content');
    document.querySelector('.review-button').classList.toggle('hide-content');
    document.querySelector('.review-movies').classList.toggle('display-content');
  })
}


// -------------- Movie Recommendations Carousel
$('#movieCarousel .carousel-item').each(function(){
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
  next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<minPerSlide;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      
      next.children(':first-child').clone().appendTo($(this));
    }
});

if (movieCarousel) {
  const moviePlaylist = [];
  let movieIdStrings = '';
  
  // listen for clicks on movie posters
  movieCarousel.addEventListener('click', (e) => {
    const imgNode = e.target.parentElement.firstElementChild.firstElementChild;
    if (imgNode.nodeName.toLowerCase() === 'img') {
      // build up string to pass into playlist model for parsing later
      movieIdStrings += imgNode.alt + ','
      document.getElementById('movieIdString').setAttribute('value', movieIdStrings);
      
      // alert user that the movie they clicked was added
      confirmAdd();

      // ensures clicked movies are only added once
      if (!moviePlaylist.includes(imgNode.alt)) {
        moviePlaylist.push(imgNode.alt);
        const addedMovie = document.createElement('img')
        addedMovie.setAttribute('src', imgNode.currentSrc)
        addedMovie.setAttribute('alt', imgNode.alt)      
        document.querySelector('.chosen-movies').appendChild(addedMovie);
      }
    }
  }
)}

// -----------------------------------Show Page JS

var Gallery = (function() {
  var colors = ['#34495E', '#2E4053', '#283747', '#212F3C', '#1B2631', '#2C3E50', '#273746'];
  var scrollTimeId;
  var posLeft = 0;

  function Gallery(config) {
      this.list = $(config.list);
      this.items = this.list.find('li');
      this.itemWidth = this.items.outerWidth();
  };

  Gallery.prototype = {
      constructor: Gallery,

      init: function() {
          this.setGalleryWidth();
          this.setItemsColor();
          this.eventManager();
            return this;
      },

      eventManager: function() {
          var _this = this;
          $(".profile-gallery").on('mousewheel', function(e) {
              clearTimeout(scrollTimeId);
              scrollTimeId = setTimeout(onScrollEventHandler.bind(this, e, _this.itemWidth), 0);
          });
      },

      getRandomColor: function() {
          return colors[Math.floor(Math.random() * colors.length)];
      },

      setItemsColor: function() {
          var _this = this;

          $.each(this.items, function(index, item) {
               item.style.backgroundColor = _this.getRandomColor();
          });
      },

      setGalleryWidth: function() {
          this.list.css('width', this.getGalleryWidth());
      },

      getGalleryWidth: function() {
          var width = 0;

          this.items.each(function(index, item) {
              width += $(this).outerWidth();
          });
          return width;
      }
  };

  function onScrollEventHandler(event, width) {
    if (event.deltaY > 0) {
      this.scrollLeft -= width / 2;
    } else {
      this.scrollLeft += width / 2;
    }
      event.preventDefault();
  };
  return Gallery;
})();

$(document).ready(function() {
  var gallery = new Gallery({
      list: '.playlist-gallery'
  }).init();
});