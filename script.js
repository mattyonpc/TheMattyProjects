const messages = [
  "Initializing Nexora systems...",
  "Access granted. Welcome, Operator.",
  "Warning: Dad-level humor detected.",
  "Nexora is operating at 110%.",
  "This button does something. Probably."
];

function activate() {
  const random = Math.floor(Math.random() * messages.length);
  document.getElementById("output").textContent = messages[random];
}
