function translatePigLatin(str) {

    let pig = "";
    let front = "";
    let back = "";
    let regex = /[aeiou]/gi;

    if(str[0].match(regex)){
        pig = str + "way";
    } else if(str.match(regex) === null){
        pig = str + "ay";
    }
    
    else {
        for(let i = 1; i < str.length; i++){
            if(str[i].match(regex)){
                // console.log(str[i])
                front = str.slice(0,i)
                // console.log(front);
                back = str.slice(i, str.length + 1)
                // console.log(back)
                pig = back + front + "ay";
                break;
            } 
                
        }
    } 


    return pig;
  }
  
  translatePigLatin("schwartz");
  