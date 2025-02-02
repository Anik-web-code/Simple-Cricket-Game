let shots = document.querySelectorAll(".shot");
const options = ["dot","one","two","three","four","six"];

let total=0;
let balls=0;
let highest=0;
let name= prompt("Enter Your Name");

let score = document.querySelector("#score");
let run = document.querySelector("#run");
let feedback = document.querySelector("#Feedback");


const genCompChoice = () => {
  const options = ["dot", "one", "two", "three", "four", "four", "six", "six", "six"];
  const randIdx = Math.floor(Math.random() * options.length+1);
  return options[randIdx];
};


const Dismissed = () =>{
      score.innerText = "Out";
      score.style.color = "red";
      
      
      feedback.innerText = `You Are Out 
                            ${name}  ${total}(${balls+1})
                            Strike Rate- ${((total*100)/(balls+1)).toFixed(2)}
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
           feedback.innerText = `${name} Pushes it On the on side for a single`;
       }

       else if(userChoice == "two"){
        total += 2;
        feedback.innerText = `${name} punches it into the gap for a couple`;

       }
       else if(userChoice == "three"){
        total += 3;
        feedback.innerText = `Nicely Played by ${name} Almost went to boundary! but denied by some excellent fielding`;
       }
       else if(userChoice == "four"){
        total +=4;
        feedback.innerText = `Excellent Stroke from ${name} for a Four`;
       }
       else if(userChoice == "six"){
        total +=6;
        feedback.innerText = `That went high and handsome the classic ${name} maximum`;
       }
       else if(userChoice == "dot" ){
        feedback.innerText = `${name} Just Commited a Crime`;
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