
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth();

var txtEmail = document.getElementById('txtEmail');
var btnRegister = document.getElementById('btnRegister');
var btnLogin = document.getElementById('btnLogin');
var registrationTable = document.getElementById('registrationTable');
var loginTable = document.getElementById('loginTable');
var info = document.getElementById('info');


//Email Validation
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


//Register Button Click Event

var el = document.getElementById('btnRegister');
if(el){
btnRegister.addEventListener('click', function(e){
  e.preventDefault();
  if(txtEmail.value == '' || txtPassword.value == ''){
    info.className = '';
    info.innerHTML = 'Please fill the form!';
    info.style.color = '#e74c3c';
    info.style.display = 'block';
    info.className += 'animated shake';
  }
  else{
     
        if(!validateEmail(txtEmail.value)){
          info.className = '';
          info.innerHTML = 'Invalid Email!';
          info.style.color = '#e74c3c';
          info.style.display = 'block';
          info.className += 'animated shake';
        }else{
          if(txtPassword.value.length < 6){
            info.className = '';
            info.innerHTML = 'Password must contain at least 6 character!';
            info.style.color = '#e74c3c';
            info.style.display = 'block';            
            info.className += 'animated shake';
          }
          else{
            info.innerHTML = 'You"ve registered successfully!';
            info.className += 'animated bounce';
            info.style.color = '#2ecc71';
            info.style.display = 'block';
            const promise = auth.createUserWithEmailAndPassword(txtEmail.value,txtPassword.value);
        
            txtEmail.value = '';
            txtPassword.value = '';
            window.location.assign("sudoku.html");
        }
        }
        
  }
  
});
}
else {
    alert("error")
}

btnLogin.addEventListener('click', function(e){
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(txtEmail.value,txtPassword.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(error.Message);
    
    });
    window.location.assign("sudoku.html");      
    
    
  });
