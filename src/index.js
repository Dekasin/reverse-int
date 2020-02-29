module.exports = function reverse (n) {
    let arr = String(n).split('');
  //  console.log(arr); //check arr value
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
      newArr[i] = arr[arr.length-i-1];
  }
  //  console.log(newArr); // check nawArr value
  return parseInt(newArr.join(""));
}
