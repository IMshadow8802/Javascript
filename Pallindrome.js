function palindrome(str) {
  let newStr =
    str
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");
      const len = newStr.length;

  for (let i = 0; i < len/2; i++) {
    if (newStr[i] !== newStr[len - 1 - i]) {
      return false;
  }
  return true;
}
}

console.log(palindrome("eye"));
