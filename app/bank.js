


function mail()  
{  
var x=document.sup.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}  


function checkf(){
 
    var firstpassword=document.sup.password.value;  
    var secondpassword=document.sup.password2.value;  
      
    if(firstpassword==secondpassword){  
    return true;  
    }  
    else{  
    alert("password must be same!");  
    return false;  
    }  
  

}

function validate() {
      
  if( document.sup.name.value == "" ) {
     alert( "Please provide your name!" );
     document.sup.Name.focus() ;
     return false;
  }
}

function validate() {
      
  if( document.sup.coun.value == "" ) {
     alert( "Please provide your name!" );
     document.sup.Name.focus() ;
     return false;
  }
}
function validate() {
      
  if( document.sup.city.value == "" ) {
     alert( "Please provide your name!" );
     document.sup.Name.focus() ;
     return false;
  }
}

function getInputValue(){
  // Selecting the input element and get its value 
  var inputVal = document.getElementById("myInput").value;
  if(inputVal.length >= 9){
    console.log("aris");
  }else {
    console.log("ar aris")
  }
  // Displaying the value
  alert(inputVal);
}







