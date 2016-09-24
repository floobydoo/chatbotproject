function talkButton() {
  var objDiv = document.getElementById("chat-area");
  var greetResponse = ["Hello", "Hey", "How's it going?", "Hi", "Greetings", "Howdy"]
  var randomResponse = Math.floor(Math.random() * 6) + 0;
  var currentdate = new Date();
  var hours = currentdate.getHours();
  if (hours > 12) {
    hours -= 12;
  }
  else if (hours === 0) {
     hours = 12;
  }
  var datetime = "It is " + hours + ":" + currentdate.getMinutes();
  var response = {
    "what is your name": "Alleria",
    "hey": greetResponse[randomResponse],
    "hello": greetResponse[randomResponse],
    "sup": greetResponse[randomResponse],
    "what time is it": datetime,
  }

  var nonsense = ["Huh?","I didn't quite understand.","What?"]
  var randomResponse2 = Math.floor(Math.random() * 3) + 0;
  if(document.getElementById('input').value != "") {
  var message = document.getElementById('input').value;
  message = message.toLowerCase();
  $("#chat-area").append(document.getElementById('input').value += "</br>");
  if (response[message] === undefined || response[message] === null) {
     $("#chat-area").append("<div class='grey'>" + nonsense[random] + "</div></br>");
     document.getElementById('input').value = "";
     objDiv.scrollTop = objDiv.scrollHeight;
}
else {
  $("#chat-area").append("<div class='grey'>" + response[message] + "</div>" + "</br>");
  console.log(response[message]);
  document.getElementById('input').value = "";
  objDiv.scrollTop = objDiv.scrollHeight;
}
}
}
