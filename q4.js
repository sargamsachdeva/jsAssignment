(function() {
  'use strict';
var original = {one:'one', two:'two'}

var copy = original;

console.log(original);
console.log(copy);

original.one = 'two';
original.two = 'one';

console.log(original); 
console.log(copy);
}());
