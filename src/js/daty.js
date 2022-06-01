const dateOneInput = document.querySelector('#date1-input');
const dateTwoInput = document.querySelector('#date2-input');
const dateHolidayInput = document.querySelector('#dateHoliday-input');
const holidaySelector = document.querySelector('#selectedHoliday-input');
const calculateDifferenceBtn = document.querySelector('#calculate-btn-1');
const calculateHolidayBtn = document.querySelector('#calculate-btn-2');
const calculatedDifferenceSpan = document.querySelector('#calculated-time-difference');
const calculatedHolidaySpan = document.querySelector('#calculated-time-holiday')

function calculateDifference(firstDate, secondDate, element) {
    firstDate = new Date(firstDate.value);
    secondDate = new Date(secondDate.value);

    let differenceInTime = secondDate.getTime() - firstDate.getTime();
    let differenceInDays = Math.floor(Math.abs(differenceInTime / (1000*3600*24)));
    if (isNaN(differenceInDays)) {
        element.innerHTML = `<span class="error">Przed obliczeniem różnicy wprowadź dwie daty</span>`;
    } else {
        element.textContent = `Różnica między podanymi przez ciebie datami wynosi ${differenceInDays} dni`;
    }
}

dateOneInput.value = '';
dateTwoInput.value = '';
dateHolidayInput.value = '';

calculateDifferenceBtn.addEventListener("click", () => {
    calculateDifference(dateOneInput, dateTwoInput, calculatedDifferenceSpan);
})

calculateHolidayBtn.addEventListener("click", () => {
    calculateDifference(dateHolidayInput, holidaySelector, calculatedHolidaySpan);
})