## Understanding HTTP  

### What is HTTP?  
It's that thing at the start of most urls, right? You may know that it stands for 'Hypertext Transfer Protocol', but let's break that down a bit.
- **Hypertext** is text that contains links to other text at multiple levels of detail or in layers, like a directory or file structure
- **Transfer** in this context means getting stuff
- **Protocol** or '[communication protocol](https://simple.wikipedia.org/wiki/Communication_protocol)' is a set of rules that determines how computers communicate

So... HTTP is a set of rules for the transfer of files and data that is stored in a multilayered structure.  

Now that we know what it is, it would be useful to know what it's for.


### What does HTTP do?

As already outlined, Hypertext Transfer Protocol (HTTP) is the mechanism through which data is requested and provided on the World Wide Web. Browser JavaScript can construct requests and send them via HTTP.

If you type 'eloquentjavascript.net/17_http.html' into your browser’s address bar, the browser first looks up the address of the server associated with eloquentjavascript.net (the domain) and tries to open a TCP connection to it on port 80, the default port for HTTP traffic.

If the server accepts the connection, it will look for files in the root folder called '/17_http.html' and, all being well, send a response containing with that resource to the browser.

![parts of a url](https://natashastokesict.files.wordpress.com/2012/10/picture21.png)

In the simplest case, a resource is simply a file on the server, but the protocol doesn’t require it to be. A resource may be anything that can be transferred as if it is a file. Many servers generate the responses they produce on the fly. For example, if you open twitter.com/marijnjh, the server looks in its database for a user named marijnjh, and if it finds one, it will generate a profile page for that user.

##### Response status codes
The server’s response will include the status of the response, first as a three-digit status code and then as a human-readable string.

`HTTP/1.1 200 OK`

Status codes starting with a 2 indicate that the request succeeded. Codes starting with 4 mean there was something wrong with the request. 404 is probably the most famous HTTP status code—it means that the resource that was requested could not be found. Codes that start with 5 mean an error happened on the server and the request is not to blame.

#### TASK
Be ready to answer the following questions
1. What is hypertext?
2. What is the status code that means success?
3. Name three web protocols besides HTTP

Some of the text above is adapted from [Eloquent Javascript, chapter 17](http://eloquentjavascript.net/17_http.html)  
