function addElement() {
  const conDiv = document.getElementById("container");

  for (let i = 1; i < 17; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("div" + i);
    conDiv.appendChild(newDiv);
  }
}

addElement();
