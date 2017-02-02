## What is HTTP?  

HTTP. It's that thing at the start of most urls, right? You probably know that it stands for 'Hypertext Transfer Protocol', but what does that actually mean?
- **Hypertext** is text that contains links to other text at multiple levels of detail or in layers, like a directory or file structure
- **Transfer** in this context means getting stuff
- **Protocol** or '[communication protocol](https://simple.wikipedia.org/wiki/Communication_protocol)' is a set of rules that determines how computers communicate

So... HTTP is a set of rules for the transfer of files and data that is stored in a multilayered structure.

### Using HTTP to communicate with a server
When sending an API request, we use a URL to identify the server (kind of like the address on an envelope) and the rest of the url specifies what it is we want the server to send back.
![parts of a url](https://natashastokesict.files.wordpress.com/2012/10/picture21.png)

##### Response status codes
The way you know if you request to a server succeeded or not is from the status code that the server sends back. These are called HTTP status codes.

Status codes are provided as a three-digit status code and then as a human-readable string (eg 'OK').

- Status codes starting with a 2 indicate that the request succeeded (eg 200).
- Codes starting with 4 mean there was something wrong with the request.
- Probably the most famous HTTP status code is 404—it means that the resource that was requested could not be found.
- Codes that start with 5 mean an error happened on the server and the request is not to blame.

### Summary
The way we make requests and get responses is via HTTP. We can tell if our request was successful by checking the HTTP status code in the response.
