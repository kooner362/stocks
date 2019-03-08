function maxProfit (arr) {
  var max_profit = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > max_profit) {
        max_profit = (arr[j] - arr[i]);
      }
    }
  }
  return max_profit;
}


console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
