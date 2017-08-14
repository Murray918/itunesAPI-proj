/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play



fetch('https://itunes.apple.com/search?term=migos')
  .then(
    function(response) {
      if (response.status != 200) {
        console.log('Looks like there was a problem. Status Code:' + response.status);
    }
    //
    response.json().then(function(data) {
      console.log(data)
      let results = data.results;
      let place = document.querySelector('.results')
      let myResults = [];

    //
        results.forEach(function(dat){
          let show =`
          <div class="result">
            <div class="albumArt"><img src="${dat.artworkUrl100}" alt=""></div>
            <div class="artistInfo">
              <ul>
                <li>${dat.trackName}</li>
                <li>${dat.artistName}</li>
                <li>${dat.collectionName}</li>
                <li>${dat.primaryGenreName}</li>
              </ul>
            </div>
          </div>`;
          $('.results').append(show)


        })




    }
  )

})
