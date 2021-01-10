function pairElement(str) {
    const pairs = [];
    const singles = [];
    const arr = [];
    for(let i = 0; i < str.length; i++){
        singles.push(str[i]);
        
    }
    for(let j = 0; j < singles.length; j++){
        switch(singles[j]){
            case "G":
                arr.push([singles[j], "C"])
                pairs.push(arr[j])
 
                break;
            case "C":
                arr.push([singles[j], "G"])
                pairs.push(arr[j])

                break;
            case "A":
                arr.push([singles[j], "T"])
                pairs.push(arr[j])

                break;
            case "T":
                arr.push([singles[j], "A"])
                pairs.push(arr[j])

                break;
        }
    }


    return pairs;
  }
  
  pairElement("GCG");