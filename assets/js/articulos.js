var productos = [];
var producto_1 = {
    nombre: 'Aceite de Lino',
    enlace: '',
    imagen: 'aceite-lino.jpg',
    categoria: 'aceite-sal'
};
var producto_2 = {
    nombre: 'Arroz',
    enlace: '',
    imagen: 'arroz.jpg',
    categoria: 'cereal'
};
var producto_3 = {
    nombre: 'Bebida de Almendra',
    enlace: '',
    imagen: 'bebida-almendra.jpg',
    categoria: 'bebidas'
};
var producto_4 = {
    nombre: 'Bebida de Arroz',
    enlace: '',
    imagen: 'bebida-arroz.jpg',
    categoria: 'bebidas'
};
var producto_5 = {
    nombre: 'Cacao',
    enlace: '',
    imagen: 'cacao.jpg',
    categoria: 'cacao'
};
var producto_6 = {
    nombre: 'Sal Marina',
    enlace: '',
    imagen: 'sal-marina.jpg',
    categoria: 'aceite-sal'
};
var producto_7 = {
    nombre: 'Harina de Arroz',
    enlace: '',
    imagen: 'harina-arroz.jpg',
    categoria: 'harinas'
};
var producto_8 = {
    nombre: 'Harina de Avena',
    enlace: '',
    imagen: 'harina-avena.jpg',
    categoria: 'harinas'
};
var producto_9 = {
    nombre: 'Quinua',
    enlace: '',
    imagen: 'aceite-lino.jpg',
    categoria: 'cereal'
};
var producto_10 = {
    nombre: 'Sirope',
    enlace: '',
    imagen: 'sirope.jpg',
    categoria: 'endulzante'
};
/**/
productos.push(producto_1);
productos.push(producto_2);
productos.push(producto_3);
productos.push(producto_4);
productos.push(producto_5);
productos.push(producto_6);
productos.push(producto_7);
productos.push(producto_8);
productos.push(producto_9);
productos.push(producto_10);
console.log(productos);
/**/

var radioButtons = document.querySelectorAll("input[name='categoria']");
let categoriaSeleccionada;
var productosFiltrados = [];
var html = "";

let findSelected = () =>{
categoriaSeleccionada = document.querySelector("input[name='categoria']:checked").value;
html = "";
productos.forEach( producto => {
    if(producto.categoria == categoriaSeleccionada){
    productosFiltrados.push(producto);
    html += `
        <div class="descripcion-producto col-6 col-md-4 pt-5 text-center">
            <img src="./assets/img/articulos_ecologicos/${producto.imagen}">
            <p class="greycliff-bold">${producto.nombre}</p>
        </div>
    `;
    console.log(producto);
    }
});
var contenedor = document.getElementById("elementosFiltrados");

contenedor.innerHTML= html;


}

console.log(productosFiltrados);
radioButtons.forEach( radioButton => {
    radioButton.addEventListener("change",findSelected);
});