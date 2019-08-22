function spongebobCase(str){
    console.log(str)
//start off as lower case
let result = str.toLowerCase();
    console.log(result)
    let answer = "";
//create a for loop that goes up by two (every other letter)
for(let i = 0; i < result.length; i ++){
    //you can't directly assign value to a string (they are immutable), so instead, create another variable that starts off as an empty string
   //now check, are we at an odd index?
   if(i % 2 == 0){
       //lets add answer to result to get capitalized version
       answer += result[i].toUpperCase()
   }else{
    //else add answer to result to get lowercase version (original version initially stored in result variable)
    answer += result[i];
        }
    }  
    console.log(answer);
} 

spongebobCase("hello it works!")