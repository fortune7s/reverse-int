module.exports = function reverse(num) {
    let result = 0;
    if(num>0){
      while (num) {
        result = result * 10 + num % 10;
        console.log(result);
        num = Math.floor(num / 10);
        console.log(num);
      }
    
      return result;
    } else{
      num = num*-1;
    }
    while (num) {
      result = result * 10 + num % 10;
      console.log(result);
      num = Math.floor(num / 10);
      console.log(num);
    }
    return result;
}

