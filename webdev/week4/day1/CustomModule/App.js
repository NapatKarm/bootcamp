var setDifference = require('./set-difference');
var setIntersection = require('./set-intersection');
console.log("WIRJRJR")
var set1 = ["dogs", "cats", "red", "bananas", "code", "movies"];
var set2 = ["blue", "horses", "dogs", "code", "rain"];

var difference = setDifference(set1, set2);
var intersection = setIntersection(set1, set2);

console.log(difference);
console.log(intersection);

