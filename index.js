var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var len = txt.length;
document.getElementById("demo").innerHTML = len;




function countWords(sentence) {
  
    let count = 1;
 
    for (let char of sentence) {
        if (char === ' ') {
            count++;
        }
    }
 
    return count;
}

let sentence = "Programming is fun and challenging";
console.log("Number of words:", countWords(sentence));








    
      function isVowel(ch) { 
        ch = ch.toUpperCase(); 
        return ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U"; 
      } 

      function countVowels(str) 
      { 
        var count = 0; 
        for (var i = 0; i < str.length; i++) 
          if (isVowel(str[i])) 
            
            ++count; 
        return count; 
      } 
  

      var str = "abc de"; 
  

      document.write(countVowels(str)); 
      document.write("<br>"); 
        
