(function() {
  let xhr = new XMLHttpRequest();
  let url =
    "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
  onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let giphyObj = xhr.responseText;
      let gifDrop = document.querySelector(".gif");
      let link = giphyObj.data[1].images.downsized_medium.url;
      gifDrop.src = link;
    }
  };
  xhr.open("GET", url, true);
})();
