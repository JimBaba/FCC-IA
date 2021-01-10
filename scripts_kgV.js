function smallestCommons(arr) {

    const range = [...arr];
    range.sort((a,b) => b - a);
    let sum = 0;
    

        for(let i = range[1] + 1; i < range[0]; i++ ){
        range.push(i);
    }

    range.sort((a,b) => b - a);

for(let i = 1; i <= 1000000; i++ ) {  
    const remainder = (current) => (range[0] * i) % current == 0;
    if(range.every(remainder) == true){
        sum = range[0] * i;
        return sum;
    }

}
    
  }
  
  
  smallestCommons([1,13]);