function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form1.text1.focus();
    return true;
  }
  else {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
  }
}

const validateEmail = (inputText, inputPassword) => {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == null || username == "") {
      alert("Please enter the username.");
      username.focus();
      return ;
  }
  if (password == null || password == "" && password < 8) {
      alert("Please enter the password.");
      return false;
  }
  alert('Login successful');
}
