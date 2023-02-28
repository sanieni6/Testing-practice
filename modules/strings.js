function stringLength(string) {
    let len= string.length;
    if(len < 1 && len>10){
         throw new Error('The string is wrong');
    }
    else{
        return len;
    }
}

function reverseString(str) {
    let reversed = "";
    if (typeof str !== "string") {
        throw new Error("Input must be a string");
      }
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }


module.exports = {
    stringLength, 
    reverseString,
};

