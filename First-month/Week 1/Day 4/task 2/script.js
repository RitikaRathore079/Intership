let vote = (age) =>
{
    if(age>=18){
          return "you are eligible for vote";
       }

else{
    return "you are not eligible for vote";
}
} 
 let age=22;
let message = vote(age);
document.getElementById("rlt").innerText=message +" 22";