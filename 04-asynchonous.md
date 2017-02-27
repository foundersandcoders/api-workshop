## Asynchronous things

### Javascript - what are you?
If you have watched the video ['What the heck is the event loop anyway?''](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t) you will be aware that Philip Roberts says Javascript is 'a single-threaded non-blocking **asynchronous** concurrent language' (my emphasis).  

Javascript at its core is actually **synchronous**, which basically means that it can do one thing at a time. However, in order to perform slower tasks (eg network requests) without blocking the browser, Javascript has certain functionality (eg setTimeout and callbacks) that are automatically diverted out of the runtime to service workers, and are then added to the task queue.

The event loop manages the processing of tasks in the call stack and the task queue. It pushes asynchronous stuff to the task queue, and processes the remaining items in the call stack. Once the call stack has been cleared, the event loop checks the task queue, and pushes tasks one by one onto the call stack until the task queue is cleared as well. This prevents the call stack from getting blocked by slow network requests etc.  

#### Task
Watch an example of asynchronous code on [loupe](http://latentflip.com/loupe/?code=Ly9zeW5jaHJvbm91cyBjb2RlClsxLDIsMyw0XS5mb3JFYWNoKGZ1bmN0aW9uKGkpIHsKICAgIGNvbnNvbGUubG9nKGkpOwp9KTsKCi8vYXN5bmNocm9ub3VzIGNvZGUKZnVuY3Rpb24gYXN5bmNGb3JFYWNoKGFycmF5LCBjYikgewogICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoKSB7CiAgICAgICAgc2V0VGltZW91dChjYiwgMCk7CiAgICB9KTsKfQoKYXN5bmNGb3JFYWNoKFsxLDIsMyw0XSwgZnVuY3Rpb24oaSkgewogICAgY29uc29sZS5sb2coaSkKfSk7CgovL3N5bmNocm9ub3VzIGNvZGUKWzEsMiwzLDRdLmZvckVhY2goZnVuY3Rpb24oaSkgewogICAgY29uc29sZS5sb2coaSk7Cn0pOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D) (note that you'll need to close the modal that pops up, and then click on the button that says 'save + run' to watch what the code does).   

You'll see that the asynchronous code gets pushed off to a service worker (outside the runtime) and all the synchronous code is processed first. Then the event loop starts picking up items from the task queue and popping them onto the stack.

#### What does synchronous actually mean?
[From StackOverflow](http://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean):
>Oddly enough "Synchronously" means "using the same clock" so when two instructions are synchronous they use the same clock and must happen one after the other. "Asynchronous" means "not using the same clock" so the instructions are not concerned with being in step with each other. That's why it looks backwards, the term is not referring to the instructions' relationship to each other. It's referring to each instructions relationship to the clock.

If you're interested in reading more, [this is](http://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean) a very detailed thread on StackOverflow about the difference between synchronous and asynchronous.  

From the same StackOverflow post:
```
Single-threaded synchronous runtime  

1 thread ->   |<---A---->||<----B---------->||<------C----->|

Single-threaded asynchronous runtime  

        A-Start -------------------------------------------- A-End   
          | B-Start -------------------------------------------|--- B-End   
          |    |      C-Start --------------------- C-End      |      |   
          |    |       |                             |         |      |
          V    V       V                             V         V      V      
1 thread->|<-A-|<--B---|<-C-|-A-|-C-|--A--|-B-|--C-->|---A---->|--B-->|
```

### API requests
When you send an API request, it can take a while for the response to come back. If your code is set up to be synchronous this can effectively freeze your browser while your app waits for a response.

For this reason, XHR (XMLHttpRequests) are designed to be asynchronous. This means that when the runtime sees an XHR, it pushes it into the task queue so it won't block other code while waiting for the response to come back from the network.
