
const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const message = document.getElementById("message")
const issue = document.getElementById("issue");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})


username.addEventListener("blur", () => {
  checkInputUsername();
})


function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Fill in a user name!!")
  }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "The email is mandatory!!")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }


}

function checkInputMessage(){
  const messageValue = message.value;

  if(messageValue === ""){
    errorInput(message, "A message must be provided")
  }else if(messageValue.length < 20){
    errorInput(message, "The message must have at least 20 characters")
  }else{
    const formItem = message.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputIssue(){
    const issueValue = issue.value;
  
    if(issueValue === ""){
      errorInput(issue, "A issue must be provided")
    }else if(issueValue.length < 100){
      errorInput(issue, "The issue must have at least 100 characters")
    }else{
      const formItem = issue.parentElement;
      formItem.className = "form-content"
    }
  
  }

function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputMessage();
  checkInputIssue();

  
  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("E-mail sent successfully")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}