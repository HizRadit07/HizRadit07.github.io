if (sessionStorage.getItem("id-token") == null){
    window.location.replace("./login.html")
}

const description = document.getElementById("description")
const form = document.getElementById("form")
const about_id = "V1cezd8fmhEMRFX47M2I"

form.addEventListener('submit', (e) => {
    //on submit, create a http request to firebase auth REST API endpoint for sign in
    e.preventDefault()
    var req_body = {
        description: description.value
    }
    $.ajax({
        type: "PATCH",
        url: `https://my-fastapi-airtable.herokuapp.com/firebase/about/${about_id}`,
        data: JSON.stringify(req_body),
        contentType:"application/json",
        headers:{
            "id-token":sessionStorage.getItem("id-token")
        },
        success: function(data){
            window.location.replace("./index_firebase.html")
        },
        error: function(){
            alert('something went wrong')
            description.value = ''
        }
    })
})