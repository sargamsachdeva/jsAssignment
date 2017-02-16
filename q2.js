
(function() {
  'use strict';

  // Do not write anything above this line and do not delete it


  // This is our note pad for testing JS
  // Write your code here

  var str= prompt("Enter string ", "");
  var result = checkPalindrome(str);
	alert('The Entered String "'+str +'" is "'+result+'"');
}());


function checkPalindrome(str)
		{
			var orignalStr;


			str = str.toLowerCase();


			orignalStr = str;


			str = str.split('');
			str = str.reverse();
			str = str.join('');

			var reverseStr = str;

			if(orignalStr == reverseStr){
				return 'Palindrome';
      }
      else{
				return 'Not Palindrome';
			}
		}
