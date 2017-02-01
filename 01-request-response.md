## The request-reponse pattern

The request-response pattern is probably the most fundamental concept to grasp. There are loads of analogies for request-response, like the one where you're in a restaurant and you order some food and the kitchen gets your order, makes the food and sends it to your table. So your order is the request and the food is the response.    

That's totally fine as an analogy, but the request-response pattern is actually pretty straightforward to understand in a context that's a bit closer to home. For example, when you open your browser, type in a url and hit enter, what you're doing is opening a connection between your browser (the client) and some domain (the server). The server processes your request and replies with any data (files, images etc) associated with the address you specified.  

An API request does the same kind of thing. It opens a connection between a client (your code running in the browser) and a server, and makes a request. The server responds with data, which might be information about the weather, pictures of cats or links to news articles.


![client-server-image](https://developer.mozilla.org/files/4291/client-server.png)  


### Giphy example
Let's compare a website url and an api url by looking at a real-world example. Imagine you're building an app and you would like to include some gifs, so you decide to use Giphy's api to get the gifs you need.

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

#### TASK
Answer the following questions (don't be afraid to google if you don't feel this document has provided you with enough information)
1. Who or what sends api requests? Who or what receives api requests?
2. What is the format of a request or a response?
3. Name three web protocols besides HTTP
