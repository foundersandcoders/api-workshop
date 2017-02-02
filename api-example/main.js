(function () {
  var xhr = new XMLHttpRequest();
  var url = "http://api.giphy.com/v1/gifs/search?q=funny+fall&api_key=dc6zaTOxFJmzC";
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
        var giphyObj = JSON.parse(xhr.responseText)
        var gifDrop = document.querySelector(".gif");
        var link = giphyObj.data[0].images.downsized_medium.url;
        gifDrop.src = link;
      }
  };
  xhr.open("GET", url, true);
  xhr.send();
})();
