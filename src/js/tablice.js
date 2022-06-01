const randomNumbersContainer = document.querySelector('.random-numbers-container');
const sortedNumbersContainer = document.querySelector('.sorted-numbers-container');
const minValueInput = document.querySelector('#min-value-input');
const maxValueInput = document.querySelector('#max-value-input');
const doSort = document.querySelector('#bubblesort-checkbox');
const generateBtn = document.querySelector('.generate-btn');
let rndArray = new Array(10);

function generateArray(array, min, max, element) {
    min = parseInt(Math.floor(min));
    max = parseInt(Math.floor(max));

    if (min > max) {
        element.innerHTML = `<span class="error">Dane zostały źle wprowadzone (być może górna granica jest niższa od tej niższej)</span>`
    } else {
        element.innerHTML = '';

        for (let i = 0; i < array.length; i++) {
            let rnd = Math.floor( Math.random() * (max - min) + min );
            array[i] = rnd;
        }

        array.forEach(arrayElement => {
            element.innerHTML += `<div class="rnd-number">${arrayElement}</div>`
        });
    }

    if (doSort.checked) {
        sortedNumbersContainer.innerHTML = '';
        let sortedArray = bubbleSort(array);
        sortedArray.forEach(element => {
            sortedNumbersContainer.innerHTML += `<div style="background-color: var(--clr-pastelgreen);" class="rnd-number">${element}</div>`
        });
    } else {
        sortedNumbersContainer.innerHTML = '';
    }
}

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

generateBtn.addEventListener("click", () => {
    generateArray(rndArray, minValueInput.value, maxValueInput.value, randomNumbersContainer);
})


