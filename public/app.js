let previousJ = 2;

function addElement(rows, cols) {
  const conDiv = document.getElementById("container");
  conDiv.innerHTML = "";

  for (let i = 0; i < rows; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let j = 0; j < cols; j++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("div" + (i * cols + j + 1));
      newDiv.addEventListener("mouseenter", function () {
        newDiv.classList.add("hovered");
      });

      rowDiv.appendChild(newDiv);
    }

    conDiv.appendChild(rowDiv);
  }
}

document.getElementById("btnNr").addEventListener("click", function () {
  const numberOfItems = prompt(
    "Montako riviä ja diviä haluat lisätä? Esim. '2' luo 2x2 ruudukon."
  );

  if (numberOfItems !== null && numberOfItems !== "") {
    const totalItems = parseInt(numberOfItems);

    if (!isNaN(totalItems) && totalItems > 0 && numberOfItems < 100) {
      addElement(totalItems, totalItems);
    } else {
      alert("Syötä alle 100 oleva positiivinen kokonaisluku.");
    }
  }
});

document.getElementById("btnClr").addEventListener("click", function () {
  addElement(previousJ, previousJ);
});

addElement(previousJ, previousJ);
