// Add your code here

function submitData(userName, emailAddress) {
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: emailAddress
    })
  }



  return fetch("http://localhost:3000/users", configObj)
    .then(function (response) {
      return response.json()
    })
    .then(function (object) {
      let p = document.createElement('p')
      document.body.appendChild(p)
      p.innerHTML = object.id
    })
    .catch(function (error) {
      let h1 = document.createElement('h1')
      document.body.appendChild(h1)
      h1.innerHTML = error.message
    })
}