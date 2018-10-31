## The fetch API: Learning Outcomes
* Understand how to use fetch to make API requests

## The anatomy of fetch

### What is fetch?
The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.

This kind of functionality was previously achieved using XMLHttpRequest. Fetch provides a better alternative that can be easily used by other technologies such as Service Workers. Fetch also provides a single logical place to define other HTTP-related concepts such as CORS and extensions to HTTP.  

### Using fetch

In a very simple manner all you really do is call fetch with the URL you want, by default the Fetch API uses the GET method, so a very simple call would be like this:

```js
fetch(url) // Call the fetch function passing the url of the API as a parameter
.then(function(data) {
    // Your code for handling the data you get from the API
})
.catch(function(error) {
    // This is where you run code if the server returns any errors
});
```

*This is the template for any Get request using fetch*  

for example:

```js
fetch('https://api.github.com/users/chriscoyier/repos')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Here's a list of repos!
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  })
```

### Line by line
Following is an explanation of each line of code from the example above.

1. `fetch(url)` --- we are calling the Fetch API and passing it the URL we defined and since no more parameters are set this is a simple GET request.
  - *url*: The requested URL (in this case, github's api) - in many cases this will be the URL of the server you are querying.

2. `.then(function(response)` --- this is the code that runs in case the request is successful, we get a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object back.

3. `return response.json();` --- `response` is just an HTTP response of course, not the actual JSON. To extract the JSON body content from the response, we use the .json() method, we return the result so it can be accessed by the following function.

4. `.then(function(data) {...})` --- we have now passed a JSON object to this function and can now use the data.

5. `.catch(function(error) {...}` --- this code will run in case an error has occurred while processing the request, if for example the url is incorrect, we'll get an error and can display a message to the user.

*Note* - Don't worry if you don't get how `.then` and `.catch` work yet, we'll go over them in greater detail in later weeks, for now all you need to know is how to use them.


### Fetch vs. XHR
Let's compare the two:

__XHR - XML HTTP Request__
```js
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      console.log(data);
    }
};
xhr.open('GET', './api/some.json', true);
xhr.send();
```

__fetch()__
```js
fetch('./api/some.json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
})
```

- Both code snippets achieve the same functionality, they're both asynchronous calls to an api (more on asynchrony in the next section) and they both parse the result and log it.
- fetch is more readable and more concise, but using XHR allows you to check for failed requests in a straightforward way by checking the `status` property, while you can do so in fetch as well, a request will not fail if the status code was of an error (to understand this more, check the optional reading).
- `response.json()` and `JSON.parse()`, the two methods are used to parse the response body. `Body.json()` is asynchronous and returns a Promise object that resolves to a JavaScript object, `JSON.parse()` is synchronous can parse a string and change the resulting returned JavaScript object.  


### Optional reading: more about response and handling request errors
Let's inspect the `response` object we receive in more depth:

1. Open a new browser window
2. Open the developer console (mac: `cmd+alt+i`, linux: `ctrl+shift+i`)
3. Type/copy the following into the console:
```js
fetch('https://api.github.com/users/chriscoyier/repos')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  })
```
*For now you can ignore the `Promise {<pending>}`, it will be explained in later weeks*

4. Check the `Response` object by clicking on the grey arrow.


- `Response.body` is a readable stream of the response's body, if you didn't parse the response you can still read the stream, example can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/Body/body#Example).

- `Response.headers` is the Headers object associated with the response. HTTP headers allow the client and the server to pass additional information with the request or the response.

- `Response.ok` is a read-only property of the Response that contains a Boolean stating whether the response was successful (status in the range 200-299) or not.
fetch rejects a promise when a network error is encountered, this means a request will fail only when a network error has occurred unrelated to the status code returned.
Try the following code in your console:
```js
fetch("http://httpstat.us/500")
    .then(function() {
        console.log("ok");
    }).catch(function() {
        console.log("error");
    });
```
You'll get `ok` logged although you know this request will return a 500 status code.
This can be fixed by checking the `response.ok`, this is what it'll look like now:
```js
fetch("http://httpstat.us/500")
.then(function(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}).then(function(response) {
    console.log("ok");
}).catch(function(error) {
    console.log(error);
});
```
We check if we received a successful response with `if(!reponse.ok)`, if it was not we will throw an error `Error(response.statusText)` which will be caught by our `.catch`.

- `Response.status` contains the status code of the response (e.g., 200 for a success). Different results can be displayed depending on the status code returned.
