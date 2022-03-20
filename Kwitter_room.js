var firebaseConfig = {
    apiKey: "AIzaSyBDJzzmvii9IFo-1rIjxeaJMitEfcWD1kM",
    authDomain: "kwitter-54629.firebaseapp.com",
    databaseURL: "https://kwitter-54629-default-rtdb.firebaseio.com",
    projectId: "kwitter-54629",
    storageBucket: "kwitter-54629.appspot.com",
    messagingSenderId: "65688062679",
    appId: "1:65688062679:web:b0282902c8084a6f317e92"
  };  

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

//Start code
console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}
