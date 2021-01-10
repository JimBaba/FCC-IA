function myReplace(str, before, after) {

    let back = "";
    let cap = "";
    if(before[0] === before[0].toUpperCase()){
        cap = after[0].toUpperCase();
        back = after.slice(1, after.length);
        after = cap + back;
        console.log(after)
    } else if (before[0] === before[0].toLowerCase() && after[0] === after[0].toUpperCase()){
        cap = after[0].toLowerCase();
        back = after.slice(1, after.length);
        after = cap + back;
        console.log(after)
    }
    str = str.replace(before, after);
    return str;
  }
  
  myReplace("I think we should look up there", "up", "Down");

  // phrase.charAt(0).toUpperCase() + phrase.slice(1);