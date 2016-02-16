// use a stack to check paranthesis.

// given a stack which can be created using
// var stack = Stack()
// and it has the following methods: push(), pop() and size()
// complete the following function.

// O(n)
// function is_palindrome(string) {
//   var stack = Stack();
//   var length = string.length;
//   var mid = Math.floor(length/2);
//   var is_odd = length % 2 !== 0;

//   for (var i = 0; i < length; i++) {
//     if (i < mid) {
//       stack.push(string.charAt(i));
//     }
//     else if (i === mid && is_odd) {  // odd
//       continue;
//     } else {
//       var element = stack.pop();
//       if (element !== string.charAt(i)) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

//O(2n)
function is_palindrome(string) {
  var stack = Stack();
  var length = string.length;
  var mid = Math.floor(length/2);
  var is_odd = length % 2 !== 0;

  for (var i = 0; i < length; i++) {
    stack.push(string.charAt(i));
  }
  var reverse = "";
  while(stack.size()){
    reverse += stack.pop();
  }
  return reverse === string;
}

console.log(is_palindrome("aaabbbaaaa"));