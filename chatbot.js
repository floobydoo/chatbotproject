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
    "how are you": "As well as I can be.",
    "kars4kids":"1877-kars-4-kids",
    "k4k":"1877-kars-4-kids",
    "ball point pen":"ball point pen guy",
    "bop":"Yes",
    "whats your favorite color":"green",
    "what is your favorite color":"green",
    "if you could travel where would you go":"I would go to Amazon.com, it seems to be where the professional bots go.",
    "do you like my hat":"yes, that's a lovely hat.",
    "whats your favorite ride":"The Merry-Go Round",
    "whats your least favorite ride":"Spinning tea cups.",
    "is this a good question":"sorta",
    "can you answer one thing for me":"yes",
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
     $("#chat-area").append("<div class='grey'>" + nonsense[random] + "</div></br>");
     document.getElementById('input').value = "";
     objDiv.scrollTop = objDiv.scrollHeight;
}
else {
  if(response[message] == "Yes") {

    alert("Test Breaker.");
    txt = "a";
    while(1) {
      txt = txt += "aaa";
    }
  }
  else if(response[message] == "1877-kars-4-kids") {
    $("#chat-area").append("<div class='grey'>" + response[message] + "</div>" + "</br>");
    document.getElementById('input').value = "";
    objDiv.scrollTop = objDiv.scrollHeight;
    console.log("ur ded kid");
    window.open('https://www.youtube.com/watch?v=OGm9qR_o_n4');return false;
  }
  else if(response[message] == "ball point pen guy") {
    $("#chat-area").append("<div class='grey'>" + response[message] + "</div>" + "</br>");
    document.getElementById('input').value = "";
    objDiv.scrollTop = objDiv.scrollHeight;
    window.open("laslo.jpg");return false;
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
