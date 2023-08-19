function addResponse() {
  const responseText = document.getElementById("input-response").value.trim();
  if (responseText === "") {
    alert("Por favor, escribe una respuesta válida.");
    return;
  }
  const date = new Date();
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  // Guarda la respuesta en la base de datos
  db.collection("responses").add({
    text: responseText,
    date: formattedDate
  })
  .then(function(docRef) {
    console.log("Respuesta guardada con ID: ", docRef.id);
    // Opcional: Actualiza la lista de respuestas en tiempo real si lo deseas
  })
  .catch(function(error) {
    console.error("Error al guardar la respuesta: ", error);
  });

  document.getElementById("input-response").value = "";
};
