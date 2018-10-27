(function () {
  var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
  var gifDrop = document.querySelector(".gif");
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(gifs) {
    var link = gifs.data[1].images.downsized_medium.url;
    gifDrop.src = link;
  })
  .catch(function(error) {
    console.log(error);
    gifDrop.src = "./error.gif";
  })
})();
