function showMessage(msg) {
    const messageBox = document.createElement("div");
    messageBox.textContent = msg;
    document.body.appendChild(messageBox);
    messageBox.classList.add("copy");
    setTimeout(() => {messageBox.classList.add("fade-out");}, 100); 
    setTimeout(() => {messageBox.remove();            }, 600);
}
