## The request-reponse pattern

### The pattern
The request-response pattern is fundamental to APIs but the core idea is actually pretty simple.

A familiar example is when you open your browser, type in a url and hit enter. What you're doing is opening a connection between your browser and some domain. The server at that address processes your request and replies with any data (files, images etc) associated with the address you specified.  

An API request does the same kind of thing. It opens a connection between a client (your code running in the browser) and a server, and makes a request. It even uses an HTTP url, just like you use in your browser address bar. The server responds with data, which might be information about the weather, pictures of cats or links to news articles.

![client-server-image](https://developer.mozilla.org/files/4291/client-server.png)  

### The request object
An API request is an object, and you create one by calling the XMLHttpRequest constructor. The next step is to create a request in the console so we can a a closer look at it.

**Examining the request object**
- Open a browser window
- Open the developer console (Mac: `CMD + shift + I`, Linux: `ctrl + shift + I`)
- Type in `var xhr = new XMLHttpRequest();`
- Type in `xhr`;
- Click on the arrows so you can take a look at the properties inherited by XMLHttpRequest objects
- Two things to take note of:
  i. The property 'responseText' has an empty string as its value. More on this in a moment.
  ii. Click on the arrow next to __proto__: XMLHttpRequest and take a look at all the methods available to you that come as part of this object, such as 'open' and 'send'. You don't need to understand these yet, just notice that they're there.


### The response object
When you examined the request we saw that the request object has a property called 'responseText', and the value is an empty string. The reason it's an empty string is that we don't have a response yet. When the server sends back the response, it comes back and a great bit mash of text. In order to transform this into an object that we can use, we 'parse' it, using JSON (JavaScript Object Notation). Once it's been parsed, you can access the object like any other JavaScript object.

**Examining the response object**
Open the following api call in a browser window:   
http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC  
This is an api url, which is using HTTP to connect with api.giphy.com and requesting whatever is at '/v1/gifs/search', which is followed by a query and an api key.

Take a look at the data that's displayed in your browser. This is what a response object looks like.

### Summary
When you make an api request you write code that sends a request object to a server via HTTP. The response you get back is a mash of text and you use the 'JSON.parse()' method to transform your response into an object you can use.
