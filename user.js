var firebaseConfig = {
  apiKey: "AIzaSyC9t-PFnO1mA1ZoeMMcuRpYeBd4DjsunyU",
  authDomain: "jusers-6a3b1.firebaseapp.com",
  projectId: "jusers-6a3b1",
  storageBucket: "jusers-6a3b1.appspot.com",
  messagingSenderId: "616637759513",
  appId: "1:616637759513:web:67b7e109d38b8468002a88",
  measurementId: "G-80S9DN44RW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function signUp() {
  var email = document.getElementById('up_email').value;
  var password = document.getElementById('up_password').value;
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
    location.href = 'home.html';
  }).catch(function(error){
    var errorcode = error.code;
    var errorMsg = error.message;
    var error = document.getElementById('up_errorMsg');
    error.textContent = errorMsg;
    error.classList.remove('d_none');
  });
}

function signIn(){
  var email=document.getElementById('in_email').value;
  var password=document.getElementById('in_password').value;
  firebase.auth().signInWithEmailAndPassword(email,password).then(function(){

  var id=firebase.auth().currentUser.uid;
  location.href = 'home.html';
  localStorage.setItem('id',id);
   
  }).catch(function(error){

    var errorCode = error.code;
    var errorMsg = error.message;
    var error = document.getElementById('in_errorMsg');
    error.textContent = errorMsg;
    error.classList.remove('d_none');

  });
}

function signOut(){
  location.href = 'index.html';
}