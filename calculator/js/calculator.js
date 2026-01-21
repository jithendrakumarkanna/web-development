let calculation=localStorage.getItem('calculation')||'';
      display();
      function updatecalculation(value){
        calculation+=value;
        // console.log(calculation);
        // localStorage.setItem('calculation',calculation);
        display();
      }
      function calculate(){
      calculation=eval(calculation);
      // console.log(calculation);
      // localStorage.setItem('calculation',calculation);
      display();
      }
      function display() {
      document.querySelector(".js-result").innerHTML= calculation || '&nbsp;'
      localStorage.setItem('calculation',calculation);
      }
      function backspace() {
        calculation = calculation.slice(0,-1);
        localStorage.setItem('calculation',calculation);
        display();  
        console.log(calculation);
      }
      function clearbutton() {
        calculation='';
        display();
        
      }
      // display();