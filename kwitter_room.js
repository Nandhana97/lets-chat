
//ADD YOUR FIREBASE LINKS

const firebaseConfig = {
  apiKey: "AIzaSyA4dlcL3wa2It672jdhOrAvccIgIevVMr8",
  authDomain: "lets-chat-4ccce.firebaseapp.com",
  databaseURL: "https://lets-chat-4ccce-default-rtdb.firebaseio.com",
  projectId: "lets-chat-4ccce",
  storageBucket: "lets-chat-4ccce.appspot.com",
  messagingSenderId: "211814676378",
  appId: "1:211814676378:web:e017923cc10194b8be6c23"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{

  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       //Room_names variable holds all the room names coming from the firebase.
  Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";// id="+Room_names+ each room name should have a unique identification
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
