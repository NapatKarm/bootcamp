function myEach(arr, cb)
{
  for(let step = 0; step < arr.length; step++)
  {
    arr[step] = cb(arr[step]);
  }
}
Array.prototype.myEach = function (cb)
{
  for(let step = 0; step < this.length; step++)
  {
    this[step] = cb(this[step]);
  }
}
function myMap(arr, cb)
{
  let mapArr = [];
  for(let step = 0; step < arr.length;step++)
  {
    mapArr[step] = cb(arr[step]);
  }
  return mapArr;
}
Array.prototype.myMap = function (cb)
{
  let mapArr = [];
  for(let step = 0; step < this.length;step++)
  {
    mapArr[step] = cb(this[step]);
  }
  return mapArr;
}

function myFilter(arr, cb)
{
  let filterArr = [];
  for(let step = 0; step < arr.length; step++)
  {
    if(cb(arr[step])) filterArr.push(arr[step]);
  }
  return filterArr;
}

Array.prototype.myFilter = function (cb)
{
  let filterArr = [];
  for(let step = 0; step < this.length; step++)
  {
    if(cb(this[step])) filterArr.push(this[step]);
  }
  return filterArr;
}

function mySome(arr, cb)
{
 let check = false;
 for(let step = 0; step < arr.length; step++)
 {
   if(cb(arr[step])) check = true;
 }
 return check;
}

Array.prototype.mySome = function (cb)
{
 let check = false;
 for(let step = 0; step < this.length; step++)
 {
   if(cb(this[step])) check = true;
 }
 return check;
}

function myEvery(arr, cb)
{
 
for(let step = 0; step < arr.length; step++)
 {
   if(cb(arr[step]) === false) return false;
 }
 return true; 
}

Array.prototype.myEvery = function (cb)
{
 for(let step = 0; step < this.length; step++)
 {
   if(cb(this[step]) === false) return false;
 }
 return true; 
}

function myReduce(arr, cb)
{
  let accu;
  for(let step = 0; step < arr.length; step++)
  {
    accu = cb(accu, arr[step]);
  }
  return accu;
}

Array.prototype.myReduce = function(cb)
{
  let accu;
  for(let step = 0; step < this.length; step++)
  {
    accu = cb(accu, this[step]);
  }
  return accu;
}

function myIncludes(arr, element)
{
 for(let step = 0; step < arr.length; step++)
 {
   if((arr[step])===element) return true;
 }
 return false;
}

Array.prototype.myIncludes = function(element)
{
 for(let step = 0; step < this.length; step++)
 {
   if((this[step])===element) return true;
 }
 return false;
}

function myIndexOf(arr, element)
{
  for(let step = 0; step < arr.length; step++)
  {
    if(arr[step] === element) return step;
  }
  return -1;
}

Array.prototype.myIndexof = function(element)
{
  for(let step = 0; step < this.length; step++)
  {
    if(this[step] === element) return step;
  }
  return -1;
}

function myPush(arr, elementToAdd)
{
  arr[(arr.length)+1] = elementToAdd;
  return arr.length;
}

Array.prototype.myPush = function(elementToAdd)
{
  this[(this.length)+1] = elementToAdd;
  return this.length;
}

function mylastIndexOf(arr, element)
{
  let answer = -1;
  for(let step = 0; step < arr.length; step++)
  {
    if(arr[step]=== element) answer = step;
  }
  return answer;
}

Array.prototype.myLastIndexOf = function(element)
{
  let answer = -1;
  for(let step = 0; step < this.length; step++)
  {
    if(this[step]=== element) answer = step;
  }
  return answer;
}

function grabKeys(object)
{
  let keyArr = [];
  for(let key in object)
  {
    if(object.hasOwnProperty(key)) keyArr.push(key);
  }
  return keyArr;
}

function grabValues(object)
{
  let keyArr = [];
  for(let value in object)
  {
    if(object.hasOwnProperty(value)) keyArr.push(object[value]);
  }
  return keyArr;
}

Object.grabKeys = function(object)
{
  let keyArr = [];
  for(let key in object)
  {
    if(object.hasOwnProperty(key)) keyArr.push(key);
  }
  return keyArr;
}

Object.grabValues = function(object)
{
  let valArr = [];
  for(let value in object)
  {
    if(object.hasOwnProperty(value)) valArr.push(object[value]);
  }
  return valArr;
}



/*
--- There are tests and basic arrays and objects created in order to test the created functions

function isEven(int){ 
  return (int % 2 === 0);
}

let objWhy ={
  someone1 : "noone1",
  someone2 : "noone2",
  someone3 : "noone3",
  Iam : "Confused",

};

let arr = [2,4,6,8,10,11];
console.log(myEvery(arr, isEven));
console.log(mySome(arr, isEven));
console.log(arr.myIncludes(8));
console.log(grabKeys(objWhy));
console.log(Object.grabKeys(objWhy));
console.log(grabValues(objWhy));
console.log(Object.grabValues(objWhy));
*/