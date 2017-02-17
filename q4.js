(function() {
  'use strict';
   
   var target={};
   var source={age:23};


   copyProperties(target,source);

   console.log("After copying:");
   console.log(target,source);

}());

function copyProperties(target, source) {
    for(prop in source) {
    target[prop] = source[prop];
  }
  
}
