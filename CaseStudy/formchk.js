function chkName(event) {

// Get the target node of the event

  var myName = event.currentTarget;

// Test the format of the input name 
//  Allow the spaces after the commas to be optional
//  Allow the period after the initial to be optional

  var pos = myName.value.search(/^[A-Za-z,]+(\s{0,1}[A-Za-z, ])*$/);

  if (pos != 0) {
    alert("The name you entered (" + myName.value + 
          ") is not in the correct form. \n" +
          "The correct form is: " +
          "Last-name First-name.");
    myName.focus();
    myName.select();
	return false;
  } 
}

function chkemail(event) {

  var myEmail = event.currentTarget;
  var regexp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+){0,2}(\.\w{2,3})$/
  ///^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //^([\w.-])+@([\w.-])+([\.]){1,3}+([A-Za-z]){2,3})$/;[\w.-]+@[\w.-]+\.[A-Za-z]{2,3}
  //var pos = myEmail.value.search(/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,3}$/);
  
  var test = regexp.test(myEmail.value)

  if (test == false) {
    alert("The email address you entered(" + myEmail.value + 
          ") is not in the correct form. \n" +
          "Please check if you have entered a validate email address.");
    myEmail.focus();
    myEmail.select();
  return false;
  }
}

function chkdate(event) {

  var myDate = event.currentTarget;
  var pos =new Date(myDate.value);//.toDateString();
  var today = new Date();

  if (pos != "" && pos <= today){
    alert("The date you entered is lesser than today's date. \n" +
          "Please enter a future date.")
    myDate.focus();
    myDate.select();
  return false;
  }
}

function chkexp(event) {
  var myExp = event.currentTarget;
  var pos = myExp.value.search(/^[^-\s][\w\s-]+$/);

  if(pos != 0) {
    alert("The experience field you entered is not in correct form.\n"+
          "Please do not start with spaces.")
    myExp.focus();
    myExp.select();
  return false;
  }
}