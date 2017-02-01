## The request-reponse pattern

Probably the most fundamental concept to grasp when learning about APIs is the request-response pattern. There are loads of analogies for request-response, such as that you (the client) are in a restaurant and you order some food and the kitchen (the server) gets your order, makes the food and sends it to your table. Sor your order is the request and the food is the response.  

That's totally fine as an analogy, but the request-response pattern is also pretty clear when you open your browser, type in a url and hit enter. What you're doing is opening a connection between your browser (the client) and some domain (the server). The server processes your request and replies with any data (files, images etc) associated with the address you specified in your request.  

An API request does the same kind of thing. It opens a connection between a client (you, your code your computer or another computer or phone running your code), and makes a request. The server responds with data.

![client-server-image](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/500px-Client-server-model.svg.png)  
Image credit: [David Vignoni](https://commons.wikimedia.org/w/index.php?curid=15782858)

Video learning: if you're at all hazy about the internets, watch [this short video]( https://www.youtube.com/watch?v=7_LPdttKXPc).

### Giphy example
Let's say you're building an app and you would like to include some gifs - everybody loves a gif!

1. Open the following url in a browser window:  
http://giphy.com/search/funny+cat  
This is a url that specifies http as its protocol, then opens a connection with the domain giphy.com, and then requests the files, images, data etc that are associated with the endpoint '/search/funny+cat'
2. Open the following api call in a browser window:   
http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC  
This is an api url, which also uses http as its protocol and then opens a connection with 'api.giphy.com'. The request then specifies a bunch of paramters in the endpoint: '/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC'. The server gets this url and is able to break it down into pieces that tell it what information is required.

3. Examine the sub-sections of the api url and see if you can figure out what each one might be for. If it's not clear, turn to the person next you and talk about it.  
/v1  
/gifs  
/search  
?q=funny+cat  
&api_key=dc6zaTOxFJmzC  

4. Take a look at the data that's returned (you can see it in your browser when you click on the api link in point 2. above). Think about how you might be able to use what's there. Click on some of the links.
