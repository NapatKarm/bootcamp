const express = require('express');
const app = express();
app.get(['/apple','/ale'], function(request, response) {
    console.log(`got request for "Apple or Ale"`);
    response.status(200).send(`Apple or Ale?`)
})
app.get(['/who+a+'], function(request, response) {
    console.log(`got request for "Whoa"`);
    response.status(200).send(`I know, right?!`)
})
app.get(['/name/:first/:last'], function(request, response) {
    console.log(`got request for "first and last name"`);
    response.status(200).send(`Hello ${request.params.first} ${request.params.last}`)
})
app.get(['/word/:word'], function(request, response) {
    console.log(`got request for "word reverse"`);
    let reverseString = "";
    for (var step = request.params.word.length -1; step >=0; step--){
        reverseString += request.params.word[step];
    }
    response.status(200).send(reverseString)
})
app.get('/hello/:name', function(request, response) {
    console.log(`got request for "/hello/${request.params.name}"`);
    response.send(`WHO ${request.params.name}!`)
})
app.get('/*', function(request, response) {
    console.log(`got request for 404"`);
    response.status(404).send("Page not found")
})
/*
app.get('/hello/world', function(request, response) {
    console.log('got request for"hello/world"');
    response.status(200).send('hello there!');
});
*/
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});