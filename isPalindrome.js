function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  function checkPalindrome(left, right) {
    if (left >= right) {
      return true;
    }
    if (str[left] !== str[right]) {
      return false;
    }
    return checkPalindrome(left + 1, right - 1);
  }
  return checkPalindrome(0, str.length - 1);
}


 // Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama"));
