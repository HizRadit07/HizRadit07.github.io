const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1WAykIq84f8ZNWYtMoeIPhhSywhNKe04"


form.addEventListener('submit', (e) => {
    //on submit, create a http request to firebase auth REST API endpoint for sign in
    e.preventDefault()
    var req_body = {
        email: email.value,
        password: password.value,
        returnSecureToken: true
    }
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(req_body),
        contentType:"application/json",
        success: function(data){
            //console.log(data.idToken)
            //reset email password
            email.value = ''
            password.value = ''
            //save idToken to cookie for verification
            //setCookie("idToken",data.idToken,1)
            setCookie("idToken", data.idToken, 1);
        },
        error: function(){
            alert('something went wrong')
            email.value = ''
            password.value = ''
        }
    })
})

function setCookie(name, value, days)
{
  if (days)
  {
    var date = new Date();
    date.setTime(date.getTime()+days*24*60*60*1000); // ) removed
    var expires = "; expires=" + date.toGMTString(); // + added
  }
  else
    var expires = "";
  document.cookie = name+"=" + value+expires + ";path=/"; // + and " added
}
