let score=JSON.parse(localStorage.getItem('score')) || {
      wins:0,
      losses:0,
      ties:0
     };
     updateScore();
      function pickComputerMove() {
        let num=Math.random();
        //let cmove="";
        if(num<=(1/3)) {
          return 'rock';
        }
        else if(num <= (2/3)) {
           return 'paper';
        }
        else {
          return 'scissor';
        }
        //return cmove;
      }
      function playgame(pmove) {
        let cmove=pickComputerMove();
        let result='';
        if(pmove==='rock') {
          if(cmove==='paper') {
            result='You lose';
          }
          else if(cmove==='scissor') {
            result='You win';
          }
          else if(cmove==='rock') {
            result='tie';
          }
        }
        else if(pmove==='paper') {
           if(cmove==='paper') {
            result='tie';
          }
          else if(cmove==='scissor') {
            result='You lose';
          }
          else if(cmove==='rock') {
            result='You win';
          }
        }
        else if(pmove==='scissor') {
           if(cmove==='paper') {
            result='You win';
          }
          else if(cmove==='scissor') {
            result='tie';
          }
          else if(cmove==='rock') {
            result='You lose';
          }
        }
        if(result==='You win') {
          score.wins++;
        }
        else if(result==='You lose') {
          score.losses++;
        }
        else if(result==='tie') {
          score.ties++
        }
        localStorage.setItem('score',JSON.stringify(score));
        updateScore();
        document.querySelector(".js-result").innerHTML=result;
        document.querySelector(".js-moves").innerHTML=`You <img src="../images/${pmove}-emoji.png"> Computer <img src="../images/${cmove}-emoji.png">.`;        
      }
      function updateScore() {
        document.querySelector(".js-score").innerHTML="Wins: "+score.wins+"   Losses: "+score.losses+"   Ties: "+score.ties;
      }
      function reset() {
        score.wins=0;
        score.losses=0;
        score.ties=0;
        localStorage.removeItem('score');
        updateScore();
      }
      document.querySelector('.js-autoplay').addEventListener('click',function(){
        autoplay();
      });
      let isautoplaying=false;
      let intervalid;
      function autoplay() {
        if(!isautoplaying) {
          isautoplaying=true;
          document.querySelector('.js-autoplay').innerHTML='Stop Playing';
          intervalid=setInterval(()=>{
            let automove=pickComputerMove();
            playgame(automove);
          },1000);
        }
        else {
          document.querySelector('.js-autoplay').innerHTML='Auto Play';
          clearInterval(intervalid);
          isautoplaying=false;
        }
      }   
      document.querySelector('.rockbutton').addEventListener('click',()=>{playgame('rock')});   
      document.querySelector('.paperbutton').addEventListener('click',()=>{playgame('paper')});   
      document.querySelector('.scissorbutton').addEventListener('click',()=>{playgame('scissor')});   
      document.body.addEventListener('keydown',(event)=>{
        if(event.key==='r') {
          playgame('rock');
        }
        else if(event.key==='p') {
          playgame('paper');
        }
        else if(event.key==='s') {
          playgame('scissor');
        }
        else if(event.key==='a') {
          autoplay();
        }
        else if(event.key==='Backspace') {
          showconformation();
        }
      });
      document.querySelector('.reset').addEventListener('click',()=>{showconformation()});
      //document.querySelector('.resetconformation').addEventListener('click',()=>{showconformation()});
      function showconformation() {
        document.querySelector('.resetconformation').innerHTML="Are you sure you want to reset the score <button class='resetyes yes'>Yes</button> <button class ='resetno no'>No</button>"
      
      document.querySelector('.resetyes').addEventListener('click',()=>{
        reset();
        hidenotification();
      });
      document.querySelector('.resetno').addEventListener('click',()=>{hidenotification()});
    }
      function hidenotification() {
        document.querySelector('.resetconformation').innerHTML='';
      }
