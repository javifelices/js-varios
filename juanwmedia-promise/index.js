// let compras = "🛒";

// function hacerLaCompra(callback) {
//     setTimeout(function() {
//         compras += "🍞";
//         callback();
//     }, 2000);
// }

// hacerLaCompra(function () {
//     console.log(compras);
//     hacerLaCompra(function () {
//         console.log(compras);
//         hacerLaCompra(function () {
//             console.log(compras);
//             hacerLaCompra(function () {
//                 console.log(compras);
//             });
//         });
//     });
// });

// let desarrollo = new Promise(function (resolve, reject) {
//     // Acciones necesarias para conseguir un resultado satisfactorio
//     setTimeout(() => {
//         const proyecto = "🍞";
//         let aleatorio = Math.random();
//         (aleatorio < 0.4)
//             ? resolve(proyecto)
//             : reject("💣 no entregado a tiempo");
//     }, 1500);
// });

// desarrollo
//     .then((proyecto) => console.log("proyecto"))
//     .catch((err) => console.error(err))
//     .finally(() => console.info('Promesa finalizada'));


let compras = "🛒";

function hacerLaCompra() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            compras += "🍞";
            console.log(compras);
            resolve();
        }, 2000);
    });
}

hacerLaCompra()
    .then(() => hacerLaCompra())
    .then(() => hacerLaCompra())
    .then(() => hacerLaCompra())

function temporizador(tiempo) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tiempo);
    });
}

temporizador(3000)
    .then(() => console.log("FIN"));

