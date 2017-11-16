## XHR requests: Learning Outcomes
* Understand what each line of an XHR request does

## The anatomy of an XHR request

### A bit of history...
The following text is adapted from [Eloquent Javascript, chapter 17](http://eloquentjavascript.net/17_http.html#h_Gh3HVKEFJQ)   

> The interface through which browser JavaScript can make HTTP requests is called XMLHttpRequest (note the inconsistent capitalization). It was designed by Microsoft, for its Internet Explorer browser, in the late 1990s. During this time, the XML file format was very popular in the world of business software—a world where Microsoft has always been at home. In fact, it was so popular that the acronym XML was tacked onto the front of the name of an interface for HTTP, which is in no way tied to XML.
>
> The name isn’t completely nonsensical, though. The interface allows you to parse response documents as XML if you want. Conflating two distinct concepts (making a request and parsing the response) into a single thing is terrible design, of course, but so it goes.
>
> When the XMLHttpRequest interface was added to Internet Explorer, it allowed people to do things with JavaScript that had been very hard before. For example, websites started showing lists of suggestions when the user was typing something into a text field. The script would send the text to the server over HTTP as the user typed. The server, which had some database of possible inputs, would match the database entries against the partial input and send back possible completions to show the user. This was considered spectacular—people were used to waiting for a full page reload for every interaction with a website.
>
> The other significant browser at that time, Mozilla (later Firefox), did not want to be left behind. To allow people to do similarly neat things in its browser, Mozilla copied the interface, including the bogus name. The next generation of browsers followed this example, and today XMLHttpRequest is a de facto standard interface.  

### Making an XHR request

It's important that you know that an XMLHttpRequest (XHR) is an object. You can create an instance of XHR using an object constructor as follows: `var xhr = new XMLHttpRequest()`. It has a whole lot of methods that assist you to interact with a server.

Here is an example of an XHR and some code to handle the response when it comes back (assuming it is successful):  

~~~
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("demo").innerHTML =
      xhr.responseText;
    }
};
xhr.open("GET", "xmlhttp_info.txt", true);
xhr.send();
~~~

[You can see it in action here](http://www.w3schools.com/xml/xml_http.asp).  

### Line by line
Following is an explanation of each line of code from the block above.

1. `var xhr = new XMLHttpRequest();` --- this creates a new instance of the XHR object, which you can then use to query a server or file of your choice.  
2. `xhr.onreadystatechange = function() {...}` --- this method of the XHR object enables you to store a function (after the '=') which will be called automatically each time the readyState property of the xhr object changes. [Read more about `onreadystatechange` here](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange).
3. `if(xhr.readyState == 4 && xhr.status == 200){...}` --- every time the readyState property changes, the function will check if these two functions are met:  
  i. `xhr.readyState == 4` --- the readyState property changes from 0 to 4 as the request is processed. 0 means the request is not initialised, while 4 means the request is finished and the response is ready. However, the response might be that the request hasn't found what it was meant to, which is why we also need:  
  ii. `xhr.status = 200` --- this property is only valid after the send method returns successfully. It will return a 3-digit status code starting with 1, 2, 3, 4, or 5, indicating what the result of your request was. The code 200 means 'OK', while 404 is notoriously the code for 'Not found'.
4. `document.getElementById("demo").innerHTML = xhr.responseText;` --- this is the code that will run if the request is successful. It generally does something with the response text (which is accessed with xhr.responseText)
5. `xhr.open("GET", "xmlhttp_info.txt", true);` --- the open method is important. Here it takes 3 parameters:  
  i. *method*: The HTTP method to use (GET, POST, PUT, DELETE etc)  
  ii. *url*: The requested URL (in this case a local file path: "xmlhttp_info.txt") - in many cases this will be the URL of the server you are querying.  
  iii. *async* (optional): whether the call should be asynchronous or not. false means it waits for a response from the server before continuing execution of the code. The default value is true, which allows you to execute other scripts while waiting for the response. This is generally preferable.
6. `xhr.send();` --- this method sends the request to the server. Use this after setting up the XHR with the .open() method. If you are GETting, it takes no parameter, but if you are POSTing, it may take a parameter of the string you wish to post.

### An aside about AJAX requests

AJAX stands for Asynchronous JavaScript And XML.

An AJAX call is an asynchronous request initiated by the browser which does not result in the page having to reload. AJAX requests are sometimes called XHR requests because this is the name most browsers give to the object used to send an AJAX request.

Asynchronicity is covered in the next page!
