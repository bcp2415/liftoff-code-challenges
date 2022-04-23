function FirstReverse(str) {
  let arr = str.split("");
  let result = [];
  for (let i = arr.length - 1; i > -1; i--) {
    result.push(arr[i]);
  }
  let resultStr = result.join("");
  return resultStr;
}
