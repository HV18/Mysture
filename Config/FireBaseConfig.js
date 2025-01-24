var admin = require("firebase-admin");

//For the service account variable add the path of your admin sdk json file
var serviceAccount = require("./mysture-demo-v0-firebase-adminsdk-lpeit-01eba0c8c8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mysture-demo-v0-default-rtdb.firebaseio.com"
});


module.exports = admin;