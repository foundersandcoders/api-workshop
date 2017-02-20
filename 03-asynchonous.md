## Asynchronous things

### Javascript - what are you?
If you have watched the video ['What the heck is the event loop anyway?''](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t) you will be aware that Philip Roberts says Javascript is 'a single-threaded non-blocking asynchronous concurrent language'.  

Javascript at its core is actually a synchronous language, which basically means that it can do one thing at a time. However, in order to perform slower tasks, like network requests, without blocking the browser Javascript has an alternative place to hold slower work called the task queue. So asynchronous code is pushed into the even loop rather than sitting in the call stack and blocking your runtime in the browser. Once the call stack has been cleared, the event loop checks the task queue, and pushes the first task onto the call stack.  

[From StackOverflow](http://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean):
>Oddly enough "Synchronously" means "using the same clock" so when two instructions are synchronous they use the same clock and must happen one after the other. "Asynchronous" means "not using the same clock" so the instructions are not concerned with being in step with each other. That's why it looks backwards, the term is not referring to the instructions' relationship to each other. It's referring to each instructions relationship to the clock.

If you're interested in reading more, [this is](http://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean) a very detailed thread on StackOverflow about the difference between synchronous and asynchronous.  

From the same StackOverflow post:
```
Single-threaded synchronous  

1 thread ->   |<---A---->||<----B---------->||<------C----->|

Single-threaded asynchronous code  

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
