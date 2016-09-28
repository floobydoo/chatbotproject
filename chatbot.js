function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
}

var typeTextString;
var typeTextArray;
var loopTimer;
function textLooper() {
 	if(typeTextArray.length > 0) {
		document.getElementById("test-area").innerHTML += typeTextArray.shift();
	} else {
		clearTimeout(loopTimer);
                return false;
	}
	loopTimer = setTimeout('textLooper()',70);
}
function typeText()
{
      typeTextArray = typeTextString.split("");
      textLooper();
}


function talkButton() {
  var objDiv = document.getElementById("chat-area");
  var greetResponse = ["Hello","Hi","Hey","How's it going?"];
  var howAmI = ["Doing well. You?", "Good", "I am doing well.", "Well, how are you?"];
  var randomResponse = Math.floor(Math.random() * 4) + 0;
  var howVal = Math.floor(Math.random() * 5) + 0;
  var currentdate = new Date();
  var hours = currentdate.getHours();
  if (hours > 12) {
    hours -= 12;
  }
  else if (hours === 0) {
     hours = 12;
  }

  //typeTextString = "Test Display";
  //typeText();

  var datetime = "It is currently " + hours + ":" + currentdate.getMinutes();
  var response = {
    "how old are you": "That's kind of a rude question.",
    "what's your name": "Alleria",
    "whats your name": "Alleria",
    "what is your name": "Alleria",
    "": "Alleria",
    "hey": greetResponse[randomResponse],
    "hello": greetResponse[randomResponse],
    "hi": greetResponse[randomResponse],
    "howdy": greetResponse[randomResponse],
    "what time is it": datetime,
  }


  var nonsense = ["Huh?","I didn't quite get that.","What?"]
  var random = Math.floor(Math.random() * 3) + 0;
  if(document.getElementById('input').value != "") {
      typeTextString = document.getElementById('input').value;
      typeText();
  var message = document.getElementById('input').value;
  message = message.toLowerCase();
  message = message.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  $("#chat-area").append(document.getElementById('input').value += "</br>");
  if (response[message] === undefined || response[message] === null) {
     //$("#chat-area").append("< weiner boy div class='grey'>I didn't quite understand that</div></br>");
     $("#chat-area").append("<div class='grey'>" + nonsense[random] + "</div></br>");
     document.getElementById('input').value = "";
     objDiv.scrollTop = objDiv.scrollHeight;
}
else {
  if(response[message] == "Yes") {

    alert("You made a mistake.");
    txt = "a";
    while(1) {
      txt = txt += "a";
    }
  }
  else if(response[message] == "The sequence of a lifeform braised in the sand") {
    $("#chat-area").append("<div class='grey'>" + response[message] + "</div>" + "</br>");
    console.log("EASTER EGG");
    document.getElementById('input').value = "";
    objDiv.scrollTop = objDiv.scrollHeight;
    window.open('https://www.youtube.com/watch?v=6E5m_XtCX3c','1474605865760','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');return false;
  }
  else if(response[message] == "I'll set it up") {
    $("#chat-area").append("<div class='grey'>" + response[message] + "</div>" + "</br>");
    console.log("EASTER EGG");
    document.getElementById('input').value = "";
    objDiv.scrollTop = objDiv.scrollHeight;
    window.open('battleship.html','1474605865760','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');return false;
  }
  else {
  $("#chat-area").append("<div class='grey'>" + response[message] + "</div>" + "</br>");
  console.log(response[message]);
  document.getElementById('input').value = "";
  objDiv.scrollTop = objDiv.scrollHeight;
}
}
}

}
