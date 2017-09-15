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
          console.log(results);

          results.forEach(function(dat) {
            let div = document.createElement('div')
            div.classList.add('result')
            let show = `
          <div class=" col s6 row">
            <div class="materialboxed col s2s "><img class ='art z-depth-5' src="${dat.artworkUrl100}" title = "${dat.previewUrl}" alt="image"></div>
            <div class="artistInfo col s2s">
              <ul>
                <li>${dat.trackName}</li>
                <li>${dat.artistName}</li>
                <li>${dat.collectionName}</li>
                <li>${dat.primaryGenreName}</li>
              </ul>
            </div>
          </div>`;
          searchResults.appendChild(div)
          searchResults.addEventListener('click', (e)=> {
            e.preventDefault();
            console.log('event is ' + e.target.title);
            player.src = e.target.title;
            audioImg.src = e.target.src;
            audio.className = '#audioShow'

          })
            $(div).append(show);

          })
        })
      })
}
