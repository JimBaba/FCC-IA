function spinalCase(str) {
    let regex = /\s+|_+/g;
    str =  str.replace(/([a-z])([A-Z])/g, "$1 $2")
    const splitStr = str.split(regex);
    
    console.log(splitStr);
    
    str = splitStr.join("-").toLowerCase();
    return str
  }
  
  spinalCase("AllThe-small Things")
