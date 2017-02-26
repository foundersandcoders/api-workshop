## Request and response

### The pattern
Request/response is a pattern that's central to making API requests. Luckily it's fairly simple to grasp.

![client-server-image](https://developer.mozilla.org/files/4291/client-server.png)  

A familiar example of request and reponse is when you open your browser, type in a url and hit enter. What you're doing is opening a connection between your browser (the client) and some domain (the server). The server at that address processes your request and replies with any data (files, images etc) associated with the address you specified in your request. You will learn how to construct requests shortly.  

An API request also opens a connection between a client (your code running in the browser) and a server, and makes a request. It even uses an HTTP url, just like you use in your browser address bar. The server responds with data, which might be information about the weather, pictures of cats or links to news articles.


### The request object
An API request is an object, and you create one by calling the XMLHttpRequest constructor.  

Let's create a request object in the console so we can take a closer look at it:  
1. Open a new browser window  
2. Open the developer console (mac: `CMD+shift+I`, linux: `ctrl+shift+I`)  
3. Type `var xhr = new XMLHttpRequest();` in the console  
4. Then type `xhr` and hit enter  
5. Click on the grey arrow next to your xhr object so you can take a look at its methods and properties  
6. Two things to take note of:    
    - The property 'responseText' has an empty string as its value. More on this in a moment.    
    - Click on the arrow next to \__proto__: XMLHttpRequest and take a look at all those methods. You'll be using a few of them, including 'open' and 'send', shortly.


### The response object
When we examined the request object we saw that it has a property called 'responseText', and its value is an empty string. The reason it's an empty string is that we don't have a response yet.  

When you make a successful request, the server sends back the response by assigning it as a value to the responseText property in your request. What comes back is great big mash of text.  

In order to transform `xhr.responseText` into an object that we can use, we 'parse' it, using JavaScript Object Notation (JSON), which has a method `JSON.parse()` that will do this bit of magic for you.

`var data = JSON.parse(xhr.responseText);`

Once the responseText been parsed, you can access it like you would any other JavaScript object. I've called my parsed object 'data'. I could then `console.log(data);` to get a look at my parsed object.

Let's take a look at an example of a response object:

1. Open the link below in a new browser window. The url will make an api request to api.giphy.com. You'll see the parsed response object in the browser window:   
http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC  
2. Take a look at the data that's displayed in your browser. This is what a response object looks like. Click on some of the links and see what happens.  
3. Take a look at the api url. You don't need to understand it all right away but it's worth having a look at it to see the relationship between the url and what's in the response object.

### Summary
When you make an api request you write code that sends a request object to a server. The response you get back is a mash of text and you use the 'JSON.parse()' method to transform your response into an object you can use.
