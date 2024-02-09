"use strict";

// let rgb = [];
// let randCol;
// for (let i = 0; i < 3; i++) {
//   randCol = Math.ceil(Math.random() * 256) - 1;
//   rgb[i] = randCol;
// }
// barva1 = rgb[0];
// barva2 = rgb[1];
// barva3 = rgb[2];

// let bkgColor = rgb(barva1, barva2, barva3);

// const btn = document.querySelector("button");
// btn.addEventListener("click", function onClick(event) {
//   document.querySelector("body").style.backgroundColor = bkgColor;
// });

// prvni funkcni ukol
// const colorChanger = document.querySelector(".btn");
// const colorCode = document.querySelector(".rgb");
// const getNumber = function () {
//   return Math.trunc(Math.random() * 256 + 0);
// };
// colorChanger.addEventListener("click", function () {
//   const colorRgb = `rgb(${getNumber()},${getNumber()},${getNumber()})`;
//   document.querySelector("body").style.backgroundColor = `${colorRgb}`;
//   colorCode.textContent = colorRgb;
// });
//prvni funkcni ukol

//druhy ukol nefunkcni
// const  colorChanger = document.querySelector('.btn');
// const colorCode = document.querySelector('hex-code');
// let hexa = [];
// const getHexa = function(){
//     for(let i = 0;i<6;i++){
//         randCol = Math.trunc(Math.random() * 16)
//         switch (randCol){
//             case 10: randCol = 'A'
//             case 11: randCol = 'B'
//             case 12: randCol = 'C'
//             case 13: randCol = 'D'
//             case 14: randCol = 'E'
//             case 15: randCol = 'F'
//         }
//         hexa[i] = randCol
//     }
// }
//druhy ukol nefunkcni

//treti ukol oboje predesle dohromady
const radio1 = document.querySelectorAll('input[name="rgbcko"]');
radio1.addEventListener("click", function () {
  document.querySelector(".btn").style.display = "static";
});
const radio2 = document.querySelectorAll('input[name="hexko"]');
radio1.addEventListener("click", function () {
  document.querySelector(".btn").style.display = "static";
});
const colorChanger = document.querySelector(".btn");
const colorCode = document.querySelector(".rgb");
const getNumber = function () {
  return Math.trunc(Math.random() * 256 + 0);
};
colorChanger.addEventListener("click", function () {
  const colorRgb = `rgb(${getNumber()},${getNumber()},${getNumber()})`;
  document.querySelector("body").style.backgroundColor = `${colorRgb}`;
  colorCode.textContent = colorRgb;
});

// treti ukol
