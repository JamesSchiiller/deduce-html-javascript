//import nav from "./nav";
import {top, bottom} from "./footer";
import * as Phoenix from "./phoenix";

// console.log(nav);
//console.log(nav());
console.log("hi")

function klikaj(sq) {
  document.getElementById(sq).innerHTML = "&#9813";
}

function loadDoc() {
  // localhost:4000/socket/websocket
  // socket = new Phoenix.Socket("/socket", {params: {token: "a token"}});
  // let channel = socket.channel("room:123", {token: roomToken})
  // channel.on("new_msg", msg => console.log("Got message", msg))

  socket = new Phoenix.Socket("ws://localhost:4000/socket/websocket", {})
  socket.connect()
  channel = socket.channel("deduce:x", {})
  channel.on("new_event", event => {
    console.log(event)
  })
  channel.join()
  .receive("ok", resp => {
    console.log("Joined successfully", resp)
    this.new_event()
  })
  .receive("error", resp => {
    alert("Unable to join", resp)
    throw(resp)
  })


  alert("button clicked")
  $.ajax({
    url: "https://jamesschiiller.github.io?api_key=123321543adkw12&move=e1&name=jgs"
  })
  .done(function(msg) {
    alert("Data saved: " + msg);
  });
}
window.klikaj= klikaj;
window.loadDoc = loadDoc;