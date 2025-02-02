let shots = document.querySelectorAll(".shot");
const options = ["dot","one","two","three","four","six"];

let total=0;
let balls=0;
let highest=0;

let score = document.querySelector("#score");
let run = document.querySelector("#run");
let feedback = document.querySelector("#Feedback");


const genCompChoice = () => {
  const options = ["dot","one","two","three","four","six"];
  const randIdx = Math.floor(Math.random()*8);
  return options[randIdx];
}

const Dismissed = () =>{
      score.innerText = "Out";
      score.style.color = "red";
      
      
      feedback.innerText = `You Are Out 
                            Score:${total}(${balls+1})
                            Strike Rate- ${(total*100)/(balls+1)}
                            Highest Score- ${highest}
                            Scroll Down for another round`;
      balls = 0;
      total =0;
     
}
const highScore = () =>{
  if(highest<total){
    highest=total;
    return highest;
  }
  Dismissed();
}


const umpire = (userChoice) => {

const compChoice = genCompChoice();
 
if(userChoice === compChoice){
  highScore();  
  
}
else{
       score.style.color = "green"
       balls++;
  
       if(userChoice == "one"){
           total += 1 ;
           feedback.innerText = "Elegant Push On the on side for a single";
       }

       else if(userChoice == "two"){
        total += 2;
        feedback.innerText = "Nice punch into the gap for a couple";

       }
       else if(userChoice == "three"){
        total += 3;
        feedback.innerText = "Nicely Played Almost went to boundary! but denied by some excellent fielding";
       }
       else if(userChoice == "four"){
        total +=4;
        feedback.innerText = "Excellent Stroke for a Four";
       }
       else if(userChoice == "six"){
        total +=6;
        feedback.innerText = "That went high and handsome the classic Mohammad Anik Ali maximum";
       }
       else if(userChoice == "dot" ){
        feedback.innerText = "You Just Commited a Crime";
       }

       run.innerText = total;

}
}


shots.forEach( (shot) => {
      shot.addEventListener("click", ()=> {

        const userChoice = shot.getAttribute("id");
        
        score.innerText = `${userChoice}`;
        umpire(userChoice);
      });
})