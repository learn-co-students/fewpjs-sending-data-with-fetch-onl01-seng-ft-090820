// Add your code here

// startup routine
window.addEventListener('DOMContentLoaded', () => {
    getUsers()
})
//

function getUsers() {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => {
        let ul = document.getElementById('users')
        ul.innerHTML = ""
        users.forEach(user => {
            let li = document.createElement('li')
            li.innerText = user.name
            ul.appendChild(li)
        })
    })
}

// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     });


//     It's time to practice writing your own POST request using fetch(). In index.js, write a method, submitData, that takes two strings arguments, one representing a user's name and the other representing a user's email.

function submitData(name, email) {
    let user = {
        name: name,
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    }

    return fetch("http://localhost:3000/users", configObj)
    .then( response => response.json() )
    .then( user => {
        // let ul = document.getElementById('users')
        // ul.innerHTML = ""
        // let li = document.createElement('li')
        // li.innerText = `${user.name} - ${user.email}`
        // ul.appendChild(li)
        document.querySelector('body').append(user.id)
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        document.querySelector('body').append(error.message);
    });
}
