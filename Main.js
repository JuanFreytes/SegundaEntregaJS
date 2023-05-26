// CREACION DE ARRAY CON OBJETOS


class Equipo {
    constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
    }
}






const equipos = [
    
    {   
        id: 1,
        nombre: "Equipo split 2250 FC",
        precio: 70000,
    },

    {
        id: 2,
        nombre: "Equipo split 3000 FC",
        precio: 90000,
    },

    {
        id: 3,
        nombre: "Equipo split 4500 FC",
        precio: 100000,
    },

    {
        id: 4,
        nombre: "Equipo split 6000 FC",
        precio: 120000,
    },

    {
        id: 5,
        nombre: "Equipo split 8000 FC",
        precio: 130000,
    },

    {
        id: 6,
        nombre: "Equipo PISO TECHO 9000 FC",
        precio: 150000,
    },

    {
        id: 7,
        nombre: "Equipo PISO TECHO 15000 FC",
        precio: 180000,
    },
    
];




//FUNCION DE FILTRADO

//SE CREA LA FUNCIÓN DE FILTRADO SEGÙN EL IMPUT DEL PROMPT

function filtrarEquipos(equipos, opcion) {
      // FILTRO POR ID
    if (opcion === '1') {
      const filtroId = parseInt(prompt('INGRESE EL ID DEL EQUIPO QUE DESEA MOSTRAR:'));
      return equipos.filter(equipos => equipos.id === filtroId);
    } 
    
    // FILTRAR POR PRECIO
      else if (opcion === '2') {
      const filtroPrecio = parseFloat(prompt('INGRESE SU PRESUPUESTO, SEGÙN LA CANTIDAD INGRESADA DEVOLVERÀ LOS EQUIPOS DISPONIBLES PARA SU COMPRA:'));
      return equipos.filter(equipos => equipos.precio <= filtroPrecio);
    } 
    
    //FILTRO POR NOMBRE
      else if (opcion === '3') {
      const filtroNombre = prompt('INGRESE EL NOMBRE DEL EQUIPO A FILTRAR:');
      return equipos.filter(equipos => equipos.nombre.toLowerCase().includes(filtroNombre.toLowerCase()));
    } 
    

    //AGREGAR UN NUEVO OBJETO AL ARRAY
    else if (opcion === '4') {
        const id = parseInt(prompt('INGRESE EL ID DEL EQUIPO:'));
        const nombre = prompt('INGRESE EL NOMBRE DEL EQUIPO:');
        const precio = parseFloat(prompt('INGRESE EL PRECIO DEL EQUIPO:'));
        
        const nuevoEquipo = new equipos(id, nombre, precio);
        equipos.push(nuevoEquipo);
        
        console.log('Producto agregado:', nuevoEquipo);
        return equipos;
    }
 

    //SI NO INGRESA UNA OPCIÒN VALIDA CIERRA EL CICLO DANDO ERROR
    else {
      console.log('NO INGRESÓ UNA OPCIÓN VALIDA PARA FILTRAR.');
      return equipos;
    }
}
  
//EL USUARIO INGRESARÀ LA OPCION DESEADA A FILTRAR
  const opcion = prompt('INGRESE LA OPCIÒN DESEADA A FILTRAR, "1" PARA ID , "2" PARA PRECIO ,  "3" PARA NOMBRE , Y 4 PARA AGREGAR UN NUEVO PRODUCTO:');
  
//MUESTRA LOS RESULTADOS
  const equiposFiltrados = filtrarEquipos(equipos, opcion);
  console.log('EQUIPOS FILTRADOS:', equiposFiltrados);




