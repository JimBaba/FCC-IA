function diffArray(arr1, arr2) {
  var newArr = [];
  arr1.forEach(x => newArr.push(x));
  arr2.forEach(x => newArr.push(x));
  newArr.sort();
  const finArr = newArr.filter(item => !(arr1.includes(item) && arr2.includes(item)));

  return finArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
