
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBDJzzmvii9IFo-1rIjxeaJMitEfcWD1kM",
      authDomain: "kwitter-54629.firebaseapp.com",
      databaseURL: "https://kwitter-54629-default-rtdb.firebaseio.com",
      projectId: "kwitter-54629",
      storageBucket: "kwitter-54629.appspot.com",
      messagingSenderId: "65688062679",
      appId: "1:65688062679:web:b0282902c8084a6f317e92"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function Send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
            
      });

      document.getElementById("msg").value = "";
}