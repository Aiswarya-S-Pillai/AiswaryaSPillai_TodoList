const username = document.getElementById("username");
const password = document.getElementById("password");

function validate()
{
  function reject(){
      console.log("rejected");
      verify.innerHTML="Invalid Username/Password";
      verify.style.color= "red"
      alert("Invalid Username or Password");
  }
  
  function accepted(){
    console.log("accepted");
    document.write("   ");
    setTimeout(function(){window.location = "ToDoList.html";}, 100); 
  }
  function check(user,pass,callback){
    if(check1=="admin" && check2=="12345"){
     
      callback();
      }
    
      reject();
  }
  
  var check1 = username.value;
  var check2 = password.value;
  check(check1,check2,accepted);
 }



  




  
  

