function maxProfit (arr) {
  var mid = Math.floor(arr.length/2);
  if (arr.length == 1) {
    return [arr[0], arr[0]];
  }
  else if (arr.length == 2) {
    return arr;
  }
  else{
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    var max_left = maxProfit(left);
    var max_right = maxProfit(right);
    var max = 0;
    var max_array;
    var profit_left = max_left[1] - max_left[0];
    var profit_right = max_right[1] - max_right[0];
    if (profit_left > profit_right){
      max = profit_left;
      max_array = max_left;
    }
    else{
      max = profit_right;
      max_array = max_right;
    }
    var profit_between = Math.max(...max_right) - Math.min(...max_left);
    if (profit_between > max){
      max = profit_between;
      max_array = [Math.min(...max_left), Math.max(...max_right)];
    }
    return max_array;
  }
}


console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
