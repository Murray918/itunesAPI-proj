
let form = document.querySelector('.search-form')
let audioImg = document.querySelector('#playerArt')
let audio = document.querySelector('.audio')
let player = document.querySelector('.music-player')
let input = document.getElementById('search')
const searchResults = document.querySelector('.results')
form.addEventListener('submit', event => {
  $('.results').empty()
  event.preventDefault();
  fetchFuncttion();
})
function fetchFuncttion() {
  fetch('https://itunes.apple.com/search?term=' + input.value)
    .then(
      function(response) {
        if (response.status != 200) {
          console.log('Looks like there was a problem. Status Code:' + response.status);
        }
        response.json().then(function(data) {
          let results = data.results;
          // results.innnerHTML = ''
          console.log(results);

          results.forEach(function(dat) {
            let div = document.createElement('div')
            div.classList.add('result')
            let show = `
          <div class=" col s6 row">
            <div class="materialboxed col s2s "><img class ='art z-depth-5' src="${dat.artworkUrl100}" alt="image"></div>
            <div class="artistInfo col s2s">
              <ul>
                <li>${dat.trackName}</li>
                <li>${dat.artistName}</li>
                <li>${dat.collectionName}</li>
                <li>${dat.primaryGenreName}</li>
              </ul>
            </div>
          </div>`;
          // div.innnerHTML = show
          searchResults.appendChild(div)
          div.addEventListener('click', ()=> {

            // event.title = dat.previewUrl
            // $('.results').append(div);
          //   // console.log(event);
            player.src = dat.previewUrl;
            audioImg.src = dat.artworkUrl100;
            audio.className = '#audioShow'


          //   console.log(dat.previewUrl);
          })
            $(div).append(show);

          })
        })
      })
}
