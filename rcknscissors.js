let userscore=0;
let compscore=0;

let uscore=document.querySelector("#uscore");
let cscore=document.querySelector("#cscore");


const msg=document.querySelector("#msg")
const drwgame=()=>{
    console.log("the game is draw ");
    msg.style.backgroundColor="darkkhaki"
    msg.innerText="Game Is Draw,Play Again"


}

const showuserwin=(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("YOU win ");
        msg.style.backgroundColor="green"
      msg.innerText=`YOU Win ${userchoice} beats ${compchoice}`;
      userscore++;
       
      uscore.innerText=`${userscore}`

    }
    else{
        console.log("you lose");
         msg.style.backgroundColor="red"
        msg.innerText=`YOU Lose ${compchoice} beats ${userchoice}`;
        compscore++;
        cscore.innerText=`${compscore}`
    }

}





const choices=document.querySelectorAll('.choice')

 
const gencompchoice=()=>{

    const options=["rock","scissors","paper"];
    const rndidx=Math.floor(Math.random()*3);
    return options[rndidx];
}

 

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener('click', () => {
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);

         
    });

})

const playgame=(userchoice)=>{

console.log("user choice is",userchoice)
    
    const compchoice =gencompchoice();
    console.log("compchoice is ",compchoice);

    if(userchoice==compchoice){

        drwgame();

    }
    else{
        let userwin=true;
        if(userchoice=="rock" ){
           userwin= compchoice=="paper" ?false:true;
        }
        else if(userchoice=="paper") {
            userwin=compchoice=="scissors" ?false:true;
        }
        else{

            userwin=compchoice=="rock" ?false:true;
        }
        showuserwin(userwin,userchoice,compchoice);
    }

}