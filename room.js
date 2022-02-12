// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYq251xb4z-nTpq1WfFaeIJZmgiBGN3Qo",
  authDomain: "speakout-bb8e6.firebaseapp.com",
  projectId: "speakout-bb8e6",
  storageBucket: "speakout-bb8e6.appspot.com",
  messagingSenderId: "166324246863",
  appId: "1:166324246863:web:0295b7e0dc879452600d3a",
  measurementId: "G-N20LJED5X5"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
