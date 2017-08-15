let form = document.querySelector('.search-form')
let player = document.querySelector('.music-player')
let input = document.getElementById('search')
let show = '';

form.addEventListener('submit', event => {
  $('.results').empty()
  event.preventDefault();
  fetchFuncttion();
})

function fetchFuncttion() {
  fetch('https://itunes.apple.com/search?term=' + input.value);
    .then(
      function(response) {
        if (response.status != 200) {
          console.log('Looks like there was a problem. Status Code:' + response.status);
        }

        response.json().then(function(data) {
          let results = data.results;

          results.forEach(function(dat) {
            let div = document.createElement('div');
            let searchResults = document.querySelector('.results');

            show = `
          <div class="result col s6 row">
            <div class="albumArt responsive-img col s2s"><img src="${dat.artworkUrl100}" alt=""></div>
            <div class="artistInfo col s2s">
              <ul>
                <li>${dat.trackName}</li>
                <li>${dat.artistName}</li>
                <li>${dat.collectionName}</li>
                <li>${dat.primaryGenreName}</li>
              </ul>
            </div>
          </div>`;

            searchResults.addEventListener('click', event => {
              $('.results').append(div);
              player.src = dat.previewUrl
            })

            $('.results').append(show);
          })
        })
      })
}
