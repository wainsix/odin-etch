function addElement() {
  const conDiv = document.getElementById("container");
  conDiv.innerHTML = "";

  for (let i = 1; i <= 16; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("div" + i);
    newDiv.addEventListener("mouseenter", function () {
      newDiv.classList.add("hovered"); // Lisää luokka "hovered" kun hiiri on elementin päällä
    });

    document.getElementById("btnClr").addEventListener("click", addElement);

    conDiv.appendChild(newDiv);
  }
}

addElement();
