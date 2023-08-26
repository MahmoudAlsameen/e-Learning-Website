function store() {
    console.log(fName);
    if (
      fName.value.length == 0 ||
      password.value.length == 0 ||
  
      validate() == false ||
      password.value != rPassword.value
    ) {
      alert("Please fill in email and password");
      regsbmit.onsubmit = function (event) {
        event.preventDefault();
      };
    } else {
   
      localStorage.setItem("email", email.value);
      localStorage.setItem("pw",    password.value);
   localStorage.setItem("fName",fName.value)
     
      
  
      regsbmit.onsubmit = function (event) {
        return true;
      };
    }
  }