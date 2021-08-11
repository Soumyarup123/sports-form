var firebaseConfig = {
  apiKey: "AIzaSyAz9w1F7vpKEbmd2HsXYFlyYxeaDmXePf4",
  authDomain: "sports-website-3e7ee.firebaseapp.com",
  databaseURL: "https://sports-website-3e7ee-default-rtdb.firebaseio.com",
  projectId: "sports-website-3e7ee",
  storageBucket: "sports-website-3e7ee.appspot.com",
  messagingSenderId: "807487275339",
  appId: "1:807487275339:web:fc1ead689ef0690eb968ce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('testForm').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();
  var year =getInputVal('year');
  readResults(year);
}
  function getInputVal(id){
  return document.getElementById(id).value;
}

function readResults(year){
  
  var results=firebase.database().ref(year);
  results.on('value', (data) => {
   var ranks = data.val(); 
   var finalranks=ranks.toString().split(',');
   document.getElementById("result1").innerHTML ="<br > 1. " +finalranks[1];
   document.getElementById("result2").innerHTML ="<br > 2. " +finalranks[2];
   document.getElementById("result3").innerHTML ="<br > 3. " +finalranks[3];
   document.getElementById("result4").innerHTML ="<br > 4. " +finalranks[4];
   document.getElementById("result5").innerHTML ="<br > 5. " +finalranks[5];
   document.getElementById("result6").innerHTML ="<br > 6. " +finalranks[6];
   document.getElementById("result7").innerHTML ="<br > 7. " +finalranks[7];
   document.getElementById("result8").innerHTML ="<br > 8. " +finalranks[8];
   document.getElementById("result9").innerHTML ="<br > 9. " +finalranks[9];
   document.getElementById("result10").innerHTML ="<br > 10. " +finalranks[10];

  
})
}