// Seleccionar Elementos del DOM
// Obtiene un elemento por su ID y muestra su texto interno
let title = document.getElementById("title");
console.log(title.innerText);

// Obtiene un elemento por su clase y todos los elementos de una lista
let mainDiv = document.querySelector(".main-div");
let listItems = document.querySelectorAll("ul.list > li");

// Modificar Elementos del DOM
// Cambia el texto y el HTML dentro de un elemento
title.innerText = "Manipulando el DOM";
title.innerHTML = "<strong>Nuevo</strong> título";

// Modifica el atributo src y añade una clase a una imagen
let image = document.querySelector("img");
image.setAttribute("src", "bun-logo.svg");
image.classList.add("img-responsive");

// Modifica el color de fondo de un div
mainDiv.style.backgroundColor = "#ffcc00";

// Crear y Eliminar Elementos del DOM
// Crea un nuevo div y lo agrega al cuerpo del documento
let newDiv = document.createElement("div");
newDiv.innerText = "Soy un div nuevo";
document.body.appendChild(newDiv);

// Elimina un div existente del DOM
let oldDiv = document.querySelector(".old-div");
document.body.removeChild(oldDiv);

// Eventos en el DOM
// Agrega un evento de clic a un botón que muestra una alerta
let button = document.querySelector("button");
button.addEventListener("click", function () {
    alert("¡Botón presionado!");
});

// Agrega un evento de clic a un botón que muestra una alerta personalizada
button.addEventListener("click", function () {
    showMessage("¡Mensaje personalizado!");
});

// Función para mostrar un mensaje en una alerta
function showMessage(message) {
    alert(message);
}

// Crear una lista dinámica
// Agrega elementos a una lista cuando se presiona un botón
let input = document.getElementById("itemInput");
let addButton = document.getElementById("addButton");
let list = document.getElementById("dynamicList");

addButton.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        let newItem = document.createElement("li");
        newItem.innerText = input.value;
        list.appendChild(newItem);
        input.value = ""; // Limpia el input después de agregar un elemento
    }
});

// Filtrado de elementos del DOM
// Filtra elementos de una lista según el texto ingresado en un campo de filtro
const filterInput = document.getElementById("filterInput");
const itemsList = document.getElementById("itemsList");

filterInput.addEventListener("keyup", function () {
    const term = filterInput.value.toLowerCase();
    const items = itemsList.getElementsByTagName("li");

    Array.from(items).forEach(function (item) {
        if (item.textContent.toLowerCase().indexOf(term) !== -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

// Drag and Drop
// Configuración para el arrastrar y soltar elementos
const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

// Oculta el elemento que se arrastra cuando comienza el arrastre
draggable.addEventListener('dragstart', function() {
    setTimeout(() => { this.style.display = 'none'; }, 0);
});

// Evita el comportamiento predeterminado al arrastrar sobre una zona de destino
dropzone.addEventListener('dragover', function(e) {
    e.preventDefault();
});

// Maneja el evento de soltar y muestra el elemento arrastrado en la zona de destino
dropzone.addEventListener('drop', function() {
    draggable.style.display = 'block';
    this.append(draggable);
});
