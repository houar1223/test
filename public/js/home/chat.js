let currentFriend = '';

function selectFriend(friendName) {
  currentFriend = friendName;
  document.getElementById("chat-header").textContent = friendName + " 님과의 채팅";
  document.getElementById("chat-box").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("message-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
});

function sendMessage() {
  if (!currentFriend) {
    alert("대화할 친구를 선택하세요!");
    return;
  }
  var inputField = document.getElementById("message-input");
  var messageText = inputField.value.trim();
  if (messageText === "") return;

  var messageElement = document.createElement("div");
  messageElement.classList.add("message", "user-message");
  messageElement.textContent = messageText;

  document.getElementById("chat-box").appendChild(messageElement);
  inputField.value = "";
  document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
}