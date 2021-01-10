// function dropElements(arr, func) {

// for(let i in arr){
//     if(func(arr[i])) return arr.slice(i);

//     }
// return []

// }
  
  dropElements([0, 1, 0, 1], function(n) {return n === 1;})

  function dropElements(arr, func){

    let times = arr.length;
    

    for(let i = 0; i < times; i++){
        if(func(arr[0])){
            
            break;
        } else {
            arr.shift()
        }
    }
    return arr

  }