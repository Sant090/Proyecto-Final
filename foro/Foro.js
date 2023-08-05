function addResponse() {
    const responseText = document.getElementById("input-response").value.trim();
    if (responseText === "") {
      alert("Por favor, escribe una respuesta válida.");
      return;
    }
    const date = new Date();
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

    const responseBox = document.createElement("div");
    responseBox.classList.add("response-box");

    const responseTextElement = document.createElement("p");
    responseTextElement.classList.add("response-text");
    responseTextElement.textContent = responseText;

    const responseDateElement = document.createElement("span");
    responseDateElement.classList.add("response-date");
    responseDateElement.textContent = formattedDate;

    responseBox.appendChild(responseTextElement);
    responseBox.appendChild(responseDateElement);

    const responsesContainer = document.getElementById("responses-container");
    responsesContainer.appendChild(responseBox);


    document.getElementById("input-response").value = "";
  }