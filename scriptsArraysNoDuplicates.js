


function uniteUnique(arr){
    
    const args = Array.prototype.slice.call(arguments);

    // console.log(args);

    const combArr = args.flat();

    const uniArr = new Set(combArr);

       // console.log(uniArr);

    const finArr = [...uniArr];

    return finArr;


}
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);