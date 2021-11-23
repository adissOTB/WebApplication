 // Your web app's Firebase configuration

 const firebaseConfig = {
    apiKey: "AIzaSyBR1qAyw7HEtpdpKEx7GQOxz5E-ylRBe0I",
    authDomain: "cmpg323-22199.firebaseapp.com",
    projectId: "cmpg323-22199",
    storageBucket: "cmpg323-22199.appspot.com",
    messagingSenderId: "854796765862",
    appId: "1:854796765862:web:efec2b2f6702019f654267"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


let profView = document.getElementById('view-pic'), 
    signupView = document.getElementById('signup-view'),
    email = document.getElementById('email'),
    password = document.getElementById('psword'),
    img = document.getElementById('image');

//import { initializeApp } from "firebase/app";
let file = {};

function chooseFile(e){ 
    file = e.target.files[0];
}

function signUpButtonPressed(){
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(auth => {
        

     firebase.storage().ref('users/' + auth.user.uid + '/profile.jpg').put(file).then(function (){
         console.log('successfully uploaded')
     })
        
    }).catch(error => {
        console.log(error.message); 
    })
}

firebase.auth().onAuthStateChanged(user =>{
    if(user){
        firebase.storage().ref('users/' + user.uid + '/profile.jpg').getDownloadURL().then(img =>{
            img.src = imgUrl;
            signupView.style.visibility = 'hidden';
            profView.style.visibility = 'visible';
        })
    }else{
        signupView.style.visibility = 'visible';
        profView.style.visibility = 'hidden';
    }
})

function signOutPressed(){

}