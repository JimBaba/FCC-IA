function fearNotLetter(str) {

    let abc = "abcdefghijklmnopqrstuvwxyz";
    let found = "";
    

    for(let i = 0; i < abc.length; i++){
        if(str[0] == abc[i]){
            found = abc.slice(i, i + str.length)
            if(str == found){
                return 
            } else {
                for(let j = 0; j < str.length; j++){
                    if(str[j] !== found[j]){
                        return found[j]
                    }
                }
            }
        }
    }

    return str;
  }

fearNotLetter("abcdefghijklmnopqrstuvwxyz");

