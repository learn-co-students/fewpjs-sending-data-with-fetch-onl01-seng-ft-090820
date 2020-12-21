// Add your code here

function submitData(userName, userEmail) {
    let formData = {
        name:`${userName}` ,
        email:`${userEmail}` 
    }

    let configObj = { 
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

    return fetch("http://localhost:3000/users",  configObj)
        .then(resp => resp.json())
        .then(data => document.body.innerHTML = data["id"])
        .catch(error => document.body.innerHTML = error.message)
}