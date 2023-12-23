const productos = [

    {
        id: "vino1",
        nombre: "Atardecer1",
        stock:8,
        precio: 1500,
        categoria: "tinto",
        imagen: "https://plus.unsplash.com/premium_photo-1668442073028-2b8200b9ea1f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "vino2",
        nombre: "Atardecer2",
        stock:6,
        precio:3000,
        categoria: "tinto",
        imagen: "https://images.unsplash.com/photo-1609951651973-03b4c838b0d2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "vino3",
        nombre: "Atardecer3",
        stock: 4,
        precio: 2000,
        categoria: "blanco",
        imagen:"https://images.unsplash.com/photo-1517620034968-c04439d3618f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "vino4",
        nombre: "Atardecer4",
        stock: 8,
        precio: 2500,
        categoria: "blanco",
        imagen: "https://images.unsplash.com/photo-1611571940159-425a28706d6f?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "vino5",
        nombre: "Atardecer5",
        stock: 7,
        precio: 3500,
        categoria: "rosa",
        imagen: "https://images.unsplash.com/photo-1688745796589-d96b5984f920?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: "vino6",
        nombre: "Atardecer6",
        stock:5,
        precio: 4000,
        categoria: "rosa",
        imagen: "https://images.unsplash.com/photo-1589816502401-1deebf9e79f6?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }




]

const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
  });
  
  export default obtenerProductos