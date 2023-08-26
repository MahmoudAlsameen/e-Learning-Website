window.addEventListener("load",function(){

    var name2= document.getElementById("name2");
    const email2 =document.getElementById("email2");
   
    
    name2.value = localStorage.getItem("fName")
    email2.value = localStorage.getItem("email")
   
  });