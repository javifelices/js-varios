const fetch = require('node-fetch');

// function half(number) {
//     return new Promise((resolve, reject) => {
//         (number % 2 === 0)
//             ? resolve(number / 2)
//             : reject('¡¡¡Error!!!');
//     });
// }

// half(4).then(console.log);
// half(3).catch(err => console.error(err));


// const promiseSuccess = Promise.resolve(1);
// const promiseRejected = Promise.reject();

// promiseSuccess.then(console.log);
// promiseRejected.catch(() => console.error('ERRORRRRR'));


// const fetchPromise = fetch('https://via.placeholder.com/150');

// fetchPromise.then(response => {
//     console.log(response);
// });


// async function hello () {
//     return 'Hola, soy una función asíncrona';
// };

// async function run() {
//     let value = await hello();
//     console.log(value);
//     console.log('after');
// };

// run();
// console.log('before');

// async function run() {
//     const response = await fetch('https://via.placeholder.com/150');
//     console.log(response);
// };

// run();


// fetch(urlToImage)
//     .then(response => response.blob())
//     .then((blob => {
//         let img = new Image();
//         img.src = URL.createObjectURL(blob);
//         return img;
//     })
//     .then(img => {
//         document.body.appendChild(img);
//     })
//     .catch((err) => console.error(err));


// const createImageFromBlob = blob => {
//     let img = new Image();
//     img.src = URL.createObjectURL(blob);
//     return img;
// };

// async function imgFetch() {
//     // try {
//     //     const response = await fetch(urlToImage);
//     //     const blob = await response.blob();

//     //     const img = createImageFromBlob(blob);

//     //     document.body.appendChild(img);
//     // } catch (err) {
//     //     console.error(err):
//     // }
//     const response = await fetch(urlToImage);
//     const blob = await response.blob();

//     const img = createImageFromBlob(blob);

//     document.body.appendChild(img);
// };

// imgFetch().catch(err => console.error(err));

// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// const run = async () => {
//     let promiseAll = Promise.all([p1, p2, p3]);

//     promiseAll.then(console.log);
// };

// const run = async () => {
//     let values = await Promise.all([p1, p2, p3]);
//     console.log(values);
// }

// run();

const delayValue = (delay, value) => new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
});

const p1 = delayValue(1000, 1);
const p2 = delayValue(2000, 2);
const p3 = delayValue(3000, 3);

const run = async () => {
    let values = await Promise.all([p1, p2, p3]);
    console.log(values);
    console.log('after');
};

run();
console.log('before');
