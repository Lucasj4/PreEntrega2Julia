const misProductos = [
    { id: "1", nombre: "Hyper Cloud X", precio: 30000, img: "../images/hyperx.jpeg", idCat: "1" },
    { id: "2", nombre: "AMD RYZEN 3 3200G ", precio: 30000, img: "../images/amd3.jpeg", idCat: "2" },
    { id: "3", nombre: "Redragon Harpe PRO K503", precio: 30000, img: "../images/harper.jpeg", idCat: "1" },
    { id: "4", nombre: "Redragon Dragonborn K630", precio: 900, img: "../images/k630.jpg", idCat: "1" },
    { id: "5", nombre: "AMD RYZEN 5 3600  ", precio: 30000, img: "../images/amd5.jpg", idCat: "2" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}


/*Actividad n° 3 Detalle de un Producto I */

/*Creamos una función similar a la anterior pero que solo nos retorne un solo item*/

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 2000)
    })
}

//Creamos una función que retorne toda una categoria: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}