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

3. `return response.json();` --- this is just an HTTP response of course, not the actual JSON. To extract the JSON body content from the response, we use the json() method, we return the result so it can be accessed by the following function.

4. `.then(function(data) {...})` --- we have now passed a JSON object to this function and can now use the data.

5. `.catch(function(error) {...}` --- this code will run in case an error has occurred while processing the request, if for example the url is incorrect, we'll get an error and can display a message to the user.

*Note* - Don't worry if you don't get how `.then` and `.catch` work yet, we'll go over them in greater detail in later weeks, for now all you need to know is how to use them.

### An aside about AJAX requests

AJAX stands for Asynchronous JavaScript And XML.

An AJAX call is an asynchronous request initiated by the browser which does not result in the page having to reload. AJAX requests are sometimes called XHR requests because this is the name most browsers give to the object used to send an AJAX request.

Asynchronicity is covered in the next page!
