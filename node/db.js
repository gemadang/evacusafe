var provider = new firebase.auth.GoogleAuthProvider();
var fb_db = firebase.database();

//
// READ
//

var test = firebase.database().ref('users/');
test.on('value', function(snapshot) {
    console.log(test);
});

//
// WRITE
//
function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }


firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
}, function(error) {
    if (error) {
      // The write failed...
    } else {
      // Data saved successfully!
    }
});

//
// GOOGLE AUTH
//
function sign_in_with_popup(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    
}

function sign_out(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        }).catch(function(error) {
        // An error happened.
    });
}

  