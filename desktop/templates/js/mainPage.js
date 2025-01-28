const { ipcRenderer } = require("electron");

document.getElementById("btnLogin").addEventListener("click", () => {
    ipcRenderer.send("navigate", "login.html");
});

document.getElementById("btnRegister").addEventListener("click", () => {
    ipcRenderer.send("navigate", "register.html");
});