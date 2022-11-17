const items =[
  {
    nombre: "A12",
    descripcion: "Mani Japones 120 gs",
    precio: "2500",
    imagen: "https://media.istockphoto.com/id/545788236/es/foto/cacahuetes-aislados-sobre-fondo-blanco.jpg?b=1&s=170667a&w=0&k=20&c=AkcVn2vkjDHzPNDGcuz90z5-WFtfCSXK4zWl1Iovh5Q="
  },
  {
    nombre: "B34",
    descripcion: "Oregano Molido 80grs",
    precio: "1200",
    imagen: "https://media.istockphoto.com/id/1137368036/es/foto/polvo-de-canela-con-palos-de-canela-que-se-disparan-desde-arriba-sobre-fondo-blanco.jpg?b=1&s=170667a&w=0&k=20&c=gBsonJBrTusa9lx4XFg2NUKEWXHcxlrEC6eOaOjYJPs="
  },
  {
    nombre: "C78",
    descripcion: "Comino entero 150grs",
    precio: "1800",
    imagen: "https://media.istockphoto.com/id/1415561628/es/foto/aceitunas-verdes-rellenas-en-un-viejo-cuenco-de-madera.jpg?b=1&s=170667a&w=0&k=20&c=3TgZWpD_bR0Ojxy_TZv0OA5DzzFAJ4w48bCq5WkP64A="
  },
  {
    nombre: "AAA90",
    descripcion: "pasas  1kilo",
    precio: "3500",
    imagen: "https://media.istockphoto.com/id/1415561628/es/foto/aceitunas-verdes-rellenas-en-un-viejo-cuenco-de-madera.jpg?b=1&s=170667a&w=0&k=20&c=3TgZWpD_bR0Ojxy_TZv0OA5DzzFAJ4w48bCq5WkP64A="
  },
  {
    nombre: "AS9834",
    descripcion: "Mani Salado 500 gs",
    precio: "7000",
    imagen: "https://media.istockphoto.com/id/545788236/es/foto/cacahuetes-aislados-sobre-fondo-blanco.jpg?b=1&s=170667a&w=0&k=20&c=AkcVn2vkjDHzPNDGcuz90z5-WFtfCSXK4zWl1Iovh5Q="
  },
  {
    nombre: "RTWFIU87",
    descripcion: "Canela Molida 150grs",
    precio: "5000",
    imagen: "https://media.istockphoto.com/id/1137368036/es/foto/polvo-de-canela-con-palos-de-canela-que-se-disparan-desde-arriba-sobre-fondo-blanco.jpg?b=1&s=170667a&w=0&k=20&c=gBsonJBrTusa9lx4XFg2NUKEWXHcxlrEC6eOaOjYJPs="
  },
  {
    nombre: "REW5243",
    descripcion: "Aceitubas verdes amargas",
    precio: "9000",
    imagen: "https://media.istockphoto.com/id/1415561628/es/foto/aceitunas-verdes-rellenas-en-un-viejo-cuenco-de-madera.jpg?b=1&s=170667a&w=0&k=20&c=3TgZWpD_bR0Ojxy_TZv0OA5DzzFAJ4w48bCq5WkP64A="
  },
  {
    nombre: "ASZZZZZZ",
    descripcion: "pasas rubias 1kilo",
    precio: "3500",
    imagen: "https://media.istockphoto.com/id/1415561628/es/foto/aceitunas-verdes-rellenas-en-un-viejo-cuenco-de-madera.jpg?b=1&s=170667a&w=0&k=20&c=3TgZWpD_bR0Ojxy_TZv0OA5DzzFAJ4w48bCq5WkP64A="
  }
]

const h1 = document.createElement("h3");
const header = document.getElementById("titulo");
h1.className="head-titulo"
h1.innerText = 'Listado de productos'
header.appendChild(h1);
let listaArt = document.getElementById("articulos")
items.forEach((item, indice) => {
  mostarProductoEnPagina(item,indice)
}) 
mantenedor()

function recargarPagina(){ 
  const titulos = document.getElementById("titulosgrilla")
    if (titulos!=null) {
      alert("Wsssssssss")
      const titulos = document.getElementById("articulos")
      var children = titulos.childNodes;
      for(child in children){
        console.log("elimina MM en la pantalla el producto")
        titulos.remove(children[child]);
      }
    }
  
    listaArt = document.getElementById("articulos")
    if (listaArt==null) {
      
      listaArt = document.createElement("div")
      listaArt.classList.add("container")
      listaArt.setAttribute("id","articulos")
      const sessionProd = document.getElementById("listaproducto")
      sessionProd.appendChild(listaArt)
      const divheadtable = document.createElement("div")
      divheadtable.innerHTML=`<div class="row fw-bold head-titulo" id="titulosgrilla">
                        <div class="col">
                          <h4>Producto</h4>
                        </div>
                        <div class="col">
                          <h4>Descripcion</h4>
                        </div>
                        <div class="col">
                          <h4>Precio</h4>
                        </div>
                        <div class="col">
                          <h4></h4>
                        </div>`
                        alert("ADD titulos")
                        listaArt.appendChild(divheadtable)
      items.forEach((item, indice) => {
        console.log(" Mostrar en en la pantalla el producto")
        mostarProductoEnPagina(item,indice)
      }) 
      mantenedor()
    } 
}

/* Crea un producto con los datos ingresados desde el formulario */
const btn_crear = document.querySelector("#agregar")
btn_crear.addEventListener("click",(e) => {
  e.preventDefault()
  texto=document.getElementById("codigo").value
  if (btn_crear.value="Modificar") {
    Modificar(texto)
  }
  
  else{
    const miProducto = {
      nombre: document.getElementById("codigo").value,
      descripcion: document.getElementById("descripcion").value,
      precio: document.getElementById("precio").value,
      imagen: document.getElementById("imagen").value
    }
    items.push(miProducto)
    mostarProductoEnPagina(miProducto,items.length-1)
    limpiarFormulario()
  }
 

})

function Modificar(texto){
  const result = items.find(({ nombre }) => nombre === texto);
  if (result != null) {
    result.descripcion=document.getElementById("descripcion").value,
    result.precio= document.getElementById("precio").value,
    result.imagen=document.getElementById("imagen").value
    recargarPagina()
    limpiarFormulario()
  }else{
   
    alert("NO SE PUEDE MODIFICA " +"\n" +"El código del producto no existe para modificar: " + texto,"SSSSS")
  }
  
}

function limpiarFormulario(){
  document.getElementById("codigo").value=""
  document.getElementById("descripcion").value=""
  document.getElementById("precio").value=""
  document.getElementById("imagen").value=""
  const btn_crear = document.querySelector("#agregar")
  btn_crear.value = "Agregar" 
}
/* Buscar el primer producto que contenga el texto a buscar desde el NAVBAR */
const btn_buscar = document.querySelector("#busqueda")
btn_buscar.addEventListener("click",(e) => {
  e.preventDefault()
  const txt_buscar = document.querySelector("#txt-busqueda")
  const result = items.filter(item =>  {
      return item.descripcion.toLowerCase().includes(txt_buscar.value.toLowerCase())
  })
  const btn_crear = document.querySelector("#agregar")
  btn_crear.value = "Modificar" 
  cargarDatosEnFormulario(result,0)
 
})

/* cargar un producto en el formulario */
function cargarDatosEnFormulario(items,i){
  document.getElementById("codigo").value=items[i].nombre
  document.getElementById("descripcion").value =  items[i].descripcion
  document.getElementById("precio").value =  items[i].precio 
  document.getElementById("imagen").value =  items[i].imagen 
  
}


function verParaModificar(index){
  cargarDatosEnFormulario(items,index)
  const btn=document.querySelector("#agregar")
  btn.value = "Modificar"  
}


function eliminarProducto(index){
  //elimina en el array el producto
  alert(index)
  alert(items.length)
  items.splice(index,1)
  alert(items.length)
  recargarPagina()
}

function mostarProductoEnPagina(producto,indice){
  const divprod = document.createElement("div")
  if ((indice % 2) == 0){
    divprod.classList.add("row")
  }else{
    divprod.classList.add("row","head-colum")
  }
  divprod.innerHTML=`
  <div class="col"><img class="img-prod" src=" ${producto.imagen}"></img> ${producto.nombre} </div>
  <div class="col" style="align-self: center;">  ${producto.descripcion} </div>
  <div class="col" style="align-self: center;">  ${producto.precio} </div>
  <div class="col" style="align-self: center;">
    <button class="btn rounded-3 btn_propio botonesModificar">Modificar</button>
    <button class="btn rounded-3 btn_propio botonesEliminar2">Eliminar2</button>
  </div>`
  listaArt.appendChild(divprod)
  
}

function actiona(indice){
  alert("Hello!"+ indice);
  items.splice(indice,1)
  console.log(items)
  recargarPagina()

}


function mantenedor(){

  const botonesModificar = document.querySelectorAll(".botonesModificar");
// botones es un arreglo así que lo recorremos
botonesModificar.forEach((boton,indice) => {
	boton.addEventListener("click", function(){verParaModificar(indice)}, false);
})

const button2 = document.querySelectorAll(".botonesEliminar2");
button2.forEach((boton,indice) => {
	boton.addEventListener("click", function(){actiona(indice)}, false);
})

}

