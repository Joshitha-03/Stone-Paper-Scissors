let userscore=0;
let compscore=0;
let user= document.querySelector(".userscore");
let comp = document.querySelector(".compscore");
let choices= document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice= choice.getAttribute("id");
       let compchoice= getcompchoice();
        checkwinner(userchoice,compchoice);
    })
})
let userwin=true;
const checkwinner=(userchoice,compchoice)=>{
    if(userchoice===compchoice){
        msg.innerText="Game is Draw";
        return;
    }
    else if(userchoice==="rock"){
        //paper,scissors
      userwin=(compchoice==="scissors"?true:false);
    }
    else if(userchoice=="paper"){
        //stone,scissors
        userwin=(compchoice==="rock"?true:false);
    } 
    else if(userchoice==="scissors"){
        //stone,paper
        userwin=(compchoice==="paper"?true:false);
    }
    getwinner(userwin,userchoice,compchoice);

}
const getwinner =(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
      user.innerHTML=userscore;
      msg.innerHTML=`You win! ${userchoice} beats ${compchoice}`;
    }
    else{
        compscore++;
        comp.innerHTML=compscore;
        msg.innerHTML=`You loose! ${compchoice} beats ${userchoice}`;
    }
}
const getcompchoice=()=>{
   let options=["rock","paper","scissors"];
   let indx= Math.floor(Math.random()*3);
   let compchoice= options[indx];
    return compchoice;
}