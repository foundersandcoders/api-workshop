# Introducing APIs

There are a few core concepts you need to understand in making API requests. By the end of this morning's workshop you should have a mental model of
- The request-response pattern
- HTTP methods and status codes
- XMLHttpRequests
- The meaning of 'asynchronous' in the context of API requests

### The workshop
We will be working in pairs this morning, so figure out who you will be working with. The plan is that each pair should actively read and discuss each topic and try to make sure they both understand the material. How you do this is up to you - you may like to take some time to read separately and then discuss the material between you.

For each topic we will give you 15-20 minutes of reading and discussion time in your pairs, and then we will spend 15-20 minutes asking you questions about the material, and we will pick on pairs at random to answer the questions or explain aspects of the material. We will also attempt to answer any questions you may have for us.

After that we will work on some examples in which we will make API requests.

#### What to do
1. Read about the [request and response pattern](https://github.com/lucymonie/api-workshop/blob/master/01-request-response.md)
    And be ready to answer questions

2. Read about the [XMLHttpRequests](https://github.com/lucymonie/api-workshop/blob/master/02-xmlhttprequest.md)
    And be ready to answer questions

3. Read about the [asynchronous code](https://github.com/lucymonie/api-workshop/blob/master/03-asynchonous.md)
    And be ready to answer questions

4. Example one: [fix a broken API request](https://github.com/lucymonie/api-workshop/tree/master/api-example)
    - You will need to clone the repository and work on the code locally
    - Go to your terminal and enter:`git clone git@github.com:lucymonie/api-workshop.git`
    - Open index.html in the browser and you will see that the API request is not working
    - Open main.js and look for what's broken or missing in the code. If you're confused, check it line-by-line against the description of XHR in [this file](https://github.com/lucymonie/api-workshop/blob/master/02-xmlhttprequest.md)

5. Example two: [write an XHR from scratch](https://github.com/skibinska/xhr-workshop)
    - Click on the link and clone the repo to your local machine
    - Write the XHR and see if you can get the request working!

### Follow up and further learning
- If you're at all hazy about how the internet works, watch [this excellent explanation]( https://www.youtube.com/watch?v=7_LPdttKXPc)
- If you're interested in how domains are translated into ip addresses, watch [this amusing discussion of DNS](https://www.youtube.com/watch?v=72snZctFFtA)
- REST (Representational State Transfer) is a best practice standard for web interactions. [This video](https://www.youtube.com/watch?v=YCcAE2SCQ6k) gives some background about REST.

