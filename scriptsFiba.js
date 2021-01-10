function sumFibs(num) {

    let fiba = [1,1]

    // generate the fiba sequence
    for(let i = 0; fiba[i] <= num; i++){
        fiba.push(fiba[i] + fiba[i+1])
    }

    console.log(fiba)

    // add odd fiba numbers lower or equal to num to new array
    let fibaOdd = [];
    
    fiba.map(function(odd){
        if(odd % 2 !== 0 && odd <= num){
            fibaOdd.push(odd)
        }
    })

    console.log(fibaOdd)

    // add all array elements together
    let fibaComb = fibaOdd.reduce((acc, val) => acc + val, 0);

    return fibaComb;
  }
  
  sumFibs(40);