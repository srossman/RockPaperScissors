// First: 0 -  player wins, 1 - CPU wins
// Players move is [1] CPU is [2]
var setWinner = [[0,"r","s"],[0,"p","r"],[0,"s","p"],[1,"r","p"],[1,"p","s"],[1,"s","r"]];
var score = [0,0];

main();

function main(){
  var rounds = setup();
  for(let i=0;i<rounds;i++){
    var user = userTurn();
    var cpu = cpuTurn();

    if(user == cpu){
      alert("Tie!");
      i--;
    }
    else{
      for(let x=0;x<setWinner.length;x++){
        if(setWinner[x][1]==user && setWinner[x][2]==cpu){
          if(setWinner[x][0]==0){
            score[0]=score[0]+1;
            alert("Player won that one!");
          }
          else{
            score[1]=score[1]+1;
            alert("CPU won that one!");
          }
        }
      }
    }
  }
  alert("The final score is Player: "+score[0]+" and CPU: "+score[1]);
}

function setup(){
  let rounds = prompt("How many rounds?");
  return rounds;
}

function userTurn(){
  var user = prompt("r,p,s?")
  return user;
}

function cpuTurn(){
  var rps = ["r","p","s"];
  var cpu = rps[Math.floor(Math.random()*3)];
  alert("CPU played: "+cpu);
  return cpu;
}
