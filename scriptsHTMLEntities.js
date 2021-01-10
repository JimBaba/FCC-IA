function convertHTML(str) {

    
    let strArr = [...str]

    console.log(strArr)
    
    for(let i = 0; i < strArr.length; i++){
        switch(strArr[i]){
            case "&":
                strArr[i] = "&amp;"
                break;
            case "<":
                strArr[i] = "&lt;" 
                break;
            case ">":
                strArr[i] = "&gt;" 
                break;
            case "\"":
                strArr[i] = "&quot;"
                break;
            case "'":
                strArr[i] = "&apos;" 
                break;
            default:
                
            
            }
    
        }

        str = strArr.join("");
    
        return str;
    }
  
  convertHTML("<>");

  convertHTML("abc")

  convertHTML("Schi & ndler's List")