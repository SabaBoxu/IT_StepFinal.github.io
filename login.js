const forms = document.querySelector(".forms"),
passwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

passwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault();
 forms.classList.toggle("show-signup");
})
})



function func0() {


      let password=document.getElementById('password').value
      let email=document.getElementById('email').value
      let username=document.getElementById('username').value
      let firstname=document.getElementById('firstname').value
      let lastname=document.getElementById('lastname').value
      let privatenumber=document.getElementById('privatenumber').value




      fetch('https://kketelauri-001-site1.gtempurl.com/api/user/login'), {      

      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
          "email": email,
          "password":password,
    })
    .then(response => response.json())
  .then(response => {
    console.log(JSON.stringify(response));
    localStorage.setItem('loggedInUser', JSON.stringify(response));
    window.location.href = 'index.html';
  })
  }
}

function func1(event) {

  event.preventDefault()

      let password=document.getElementById('password').value
      let email=document.getElementById('email').value
      let username=document.getElementById('username').value
      let firstname=document.getElementById('firstname').value
      let lastname=document.getElementById('lastname').value
      let privatenumber=document.getElementById('privatenumber').value
  
fetch('https://kketelauri-001-site1.gtempurl.com/api/user/adduser', {

method: 'POST',
headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
},
body: JSON.stringify({ 
    "userName": username,
    "firstName": firstname,
    "lastName": lastname,
    "email": email,
    "privateNumber": privatenumber,
    "password": password,
    "active": true})
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
}

