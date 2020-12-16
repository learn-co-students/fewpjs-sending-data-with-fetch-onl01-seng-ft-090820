// let data = {
//     name: "Bob",
//     email: "bob@bob.com"
// };

// let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(data)
//   };
   
function submitData(name, email) {
    let user = {
        name: name,
        email: email
    };
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(user)
      };
    fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(u => { 
        document.body.innerHTML = u["id"]
        // let body = document.querySelector('body')
        // let li = document.createElement('li')
        // li.innerText = u.id
        // body.appendChild(u.id)
    })
    .catch(error => {
        document.body.innerHTML = error.message
        console.log(error.message);
    })
}

// submitData("mike", "mike@mike.com")
// submitData("moose", "moose@moose.com")