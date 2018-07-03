## Request and response: Learning Outcomes

* Understand what a request and a response is
* Be familiar with what a request object and response object looks like
* Know what JSON is used for and what it looks like

## Request and response

### The pattern

Request/response is a pattern that's central to making API requests. 

![client-server-image](https://developer.mozilla.org/files/4291/client-server.png)

A familiar example of request and response is when you open your browser, type in
a url and hit enter. What you're doing is opening a connection between your
browser (the client) and some domain (the server). The server at that address
processes your request and replies with any data (files, images etc) associated
with the address you specified in your request. You will learn how to construct
requests shortly.

An API request also opens a connection between a client (your code running in
the browser) and a server, and makes a request. It even uses an HTTP url, just
like you use in your browser address bar. The server responds with data, which
might be information about the weather, pictures of cats or links to news
articles.

### The request object

An API request is an object, and you create one by calling the XMLHttpRequest
constructor.

Let's create a request object in the console so we can take a closer look at it:

1. Open a new browser window
2. Open the developer console (mac: `cmd+alt+i`, linux: `ctrl+shift+i`)
3. Type `var xhr = new XMLHttpRequest();` in the console
4. Then type `xhr` and hit enter
5. Click on the grey arrow next to your xhr object so you can take a look at its
   methods and properties
6. Two things to take note of:
   * The property 'responseText' has an empty string as its value. More on this
     in a moment.
   * Click on the arrow next to `__proto__`: XMLHttpRequest and take a look at all
     those methods. You'll be using a few of them, including 'open' and 'send',
     shortly.

### The response object

When we examined the request object we saw that it has a property called
'responseText', and its value is an empty string. The reason it's an empty
string is that we don't have a response yet.

When you make a successful request, the server sends back the response by
assigning it as a value to the responseText property in your request. What comes
back is great big string of text that is difficult to use.


The `xhr.responseText` string usually is a 'stringified' version of an object we can use once we
'parse' the string, using **JavaScript Object Notation (JSON)**.

In case you haven't heard of it before, JSON is a way to store information
that's organised and easy to access. It looks like a JavaScript object but its
keys and values are always strings before parsing. Once parsed it's values
could be string, number, boolean, object, array or null.

JSON has two methods to convert strings to JSON objects and back again  : 

* `var string = JSON.stringify(object)`
* `var object = JSON.parse(string)`

In our case, we will parse the `xhr.responseText` we receive back from our API call from a string into a JSON object like so:

`var data = JSON.parse(xhr.responseText);`

Once the responseText has been parsed, you can access it like you would any other
JavaScript object. I've called my parsed object 'data'. I could then `console.log(data);` to get a look at my parsed object.  

It follows that before *sending* a JSON object anywhere we should also use the `JSON.stringify()` method in JS to transform it to a string:

`var response = JSON.stringify(dataToSend);`

In the example above the `response` and `responseText` are identical, but the `response` is on the server side while the `responseText` is on
the browser "Client Side" in your browser.

We make XMLHttpRequest so we can ask the server to send us that response.

In the mean time we will only use the parse method, once you start to build your
own server in the next weeks you will start using the `JSON.stringify()` method.

### But what if the response object is not a JSON object? 

In this case using `JSON.parse(responseText)` will throw an error.   This might be because the address we have requested data from is responding with a file, webpage, or other media that isn't structured in a JSON format. This could also happen if there was an error with the connection and the JSON response is returned with missing chunks. 

To protect against this you could wrap your `JSON.parse(responseText)` in a `try... catch` block like so:

```
try {
  var data = JSON.parse(xhr.responseText)
} catch (e) {
  var data = {
    error: true,
    message: e
  }  
}
```
You can learn more about the `try... catch` statement at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) but don't worry too much about implementing it now.

Many REST APIs send the response as a JSON object. JSON object is a very
popular form of data which is why we are focusing on this response type in this workshop.

### Let's take a look at an example of a response object:

1. Open the link below in a new browser window. The url will make an api request
   to api.giphy.com. You'll see the parsed response object in the browser
   window:\
   http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC
2. Take a look at the data that's displayed in your browser. This is what a
   response object looks like. Click on some of the links and see what happens.
3. Take a look at the api url. You don't need to understand it all right away
   but it's worth having a look at it to see the relationship between the url
   and what's in the response object.

### Summary

When you make an api request you write code that sends a request object to a
server. The response you get back is a mash of text and you use the
`JSON.parse()` method to transform your response into an object you can use.
