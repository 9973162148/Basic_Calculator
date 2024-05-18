let display = document.getElementById("display");
let buttons = document.querySelectorAll ("button");
let string='';
let buttonsArray = Array.from(buttons);

 buttonsArray.forEach(btn =>{
     
     btn.addEventListener('click',(e)=>{
      
         
         
         
         if (e.target.innerHTML =='Del'){
             string = string.substring(0, string.length-1);
             display.value= string;
         }
         else if(e.target.innerHTML=='C'){
            string='';
           display.value=string;
       }

       else if(e.target.innerHTML=='%') {
        string='';
        display.value=string;
       }
       
       else if(e.target.innerHTML=='='){
           try{
               string= eval(string);
           display.value=string;
       }
       catch(Error){
           display.value='Error';
       }
       }
       else {string += e.target.innerHTML;
         display.value = string;
         
       }
         
     });
 });