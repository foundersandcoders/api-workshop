(function () {
  var xhr = new XMLHttpRequest();
  var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
  onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var giphyObj = xhr.responseText;
        var gifDrop = document.querySelector(".gif");
        var link = giphyObj.data[1].images.downsized_medium.url;
        gifDrop.src = link;
      }
  };
  xhr.open("GET", url, true);
})();
