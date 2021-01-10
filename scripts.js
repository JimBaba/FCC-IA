function steamrollArray(arr) {

    const newArr = (arr) => arr.reduce((flat, next) => flat.concat(next), [])



    return newArr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);