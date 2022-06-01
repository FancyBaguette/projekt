// ZMIENNE DO PRZEDSTAWIENIA MODELU RGBA
const box1 = document.querySelector('.boxes-1');
const box2 = document.querySelector('.boxes-2');
const box3 = document.querySelector('.boxes-3');
const box4 = document.querySelector('.boxes-4');
// ZMIENNE DO GENEROWANIA LOSOWYCH KWADRATÓW
const randomBoxContainer = document.querySelector('.random-boxes-container');
const randomBoxAmount =  document.querySelector('#rnd-box-amount-input');
const doIncludeTransparent = document.querySelector('#rnd-box-transparency-check');
const randomBoxGenerateBtn = document.querySelector('.generate-random-boxes');

function generateRgbaBoxes(color, element) {
    let colorTemplate = '';

    switch (color) {
        case 'red':
            colorTemplate = '255, 0, 0';
            break;
        case 'green':
            colorTemplate = '0, 255, 0';
            break;
        case 'blue':
            colorTemplate = '0, 0, 255';
            break;
        case 'yellow':
            colorTemplate = '255, 255, 0';
            break;
        default:
            colorTemplate = '0, 0, 255';
    }

    for (let i = 0.1; i < 1; i += 0.1) {
        element.innerHTML +=
        `
        <div class="clr-box" style="background-color: rgba(${colorTemplate}, ${i.toFixed(1)})" title="${i.toFixed(1)}"></div>
        `;
    }


}

generateRgbaBoxes('red', box1);
generateRgbaBoxes('green', box2);
generateRgbaBoxes('blue', box3);
generateRgbaBoxes('yellow', box4)

function generateRandomBoxes(amount, option, element) {
    element.innerHTML = "";

    function randomRgb() {
        return Math.floor(Math.random()*255);
      }

    for (let i = 0; i < amount; i++) {

        if (option.checked) {
            let rndAlpha = Math.random().toFixed(1);
            element.innerHTML += 
            `
            <div class="clr-box" style="background-color: rgba( ${randomRgb()}, ${randomRgb()}, ${randomRgb()}, ${rndAlpha} )"></div>
            `;
        } else {
            element.innerHTML += 
            `
            <div class="clr-box" style="background-color: rgba( ${randomRgb()}, ${randomRgb()}, ${randomRgb()} )"></div>
            `;
        }
    }

}

randomBoxGenerateBtn.addEventListener("click", () => {
    generateRandomBoxes(randomBoxAmount.value, doIncludeTransparent, randomBoxContainer);
})




